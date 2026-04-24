import { create } from 'zustand';

export type FeedMode = 'foryou' | 'random' | 'preprints';

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  keywords: string[];
  doi: string;
  source: 'pubmed' | 'biorxiv';
  score?: number;
}

export interface Interaction {
  paperId: string;
  action: 'save' | 'skip' | 'view';
  keywords: string[];
  timestamp: number;
}

export interface KeywordStats {
  saves: number;
  skips: number;
  lastTs: number;
}

export type KeywordProfile = Record<string, KeywordStats>;

const HALF_LIFE_MS = 30 * 24 * 60 * 60 * 1000;

export function keywordWeight(stats: KeywordStats, now: number = Date.now()): number {
  const decay = Math.pow(0.5, (now - stats.lastTs) / HALF_LIFE_MS);
  const raw = Math.log(1 + stats.saves) - 0.5 * Math.log(1 + stats.skips);
  return raw * decay;
}

interface AppState {
  // Navigation
  currentView: 'discover' | 'saved';
  setCurrentView: (view: 'discover' | 'saved') => void;

  // Onboarding
  hasOnboarded: boolean;
  initialKeywords: string[];
  completeOnboarding: (keywords: string[]) => void;

  // Feed mode
  feedMode: FeedMode;
  setFeedMode: (mode: FeedMode) => void;

  // Search
  searchQuery: string;
  setSearchQuery: (q: string) => void;

  // Paper queue (scored and ready)
  paperQueue: Paper[];
  setPaperQueue: (queue: Paper[] | ((prev: Paper[]) => Paper[])) => void;
  appendToQueue: (papers: Paper[]) => void;

  // Current index into queue
  currentIndex: number;
  setCurrentIndex: (index: number | ((prev: number) => number)) => void;

  // Loading
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
  loadingMore: boolean;
  setLoadingMore: (v: boolean) => void;

  // Saved papers
  savedIds: string[];
  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;

  // Keyword profile
  keywordProfile: KeywordProfile;
  updateKeywordProfile: (keywords: string[], action: 'save' | 'skip') => void;
  topKeywords: string[];
  dislikedKeywords: string[];

  // Interactions
  interactions: Interaction[];
  addInteraction: (interaction: Omit<Interaction, 'timestamp'>) => void;

  // Detail sheet
  detailPaper: Paper | null;
  setDetailPaper: (paper: Paper | null) => void;

  // Toast
  toastMessage: string;
  toastVisible: boolean;
  showToast: (message: string) => void;
  hideToast: () => void;

  // Reset
  resetQueue: () => void;
}

const STORAGE_KEY_SAVED = 'paperswipe-saved-ids';
const STORAGE_KEY_PROFILE = 'paperswipe-keyword-profile';
const STORAGE_KEY_INTERACTIONS = 'paperswipe-interactions';
const STORAGE_KEY_ONBOARDED = 'paperswipe-onboarded';
const STORAGE_KEY_INITIAL_KW = 'paperswipe-initial-keywords';

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // silently fail
  }
}

function loadKeywordProfile(): KeywordProfile {
  const raw = loadJson<Record<string, unknown>>(STORAGE_KEY_PROFILE, {});
  const firstValue = Object.values(raw)[0];
  if (firstValue !== undefined && typeof firstValue !== 'object') {
    // Old format (number values) — discard; rebuilds from future interactions
    return {};
  }
  return raw as KeywordProfile;
}

export const useStore = create<AppState>((set, get) => ({
  // Navigation
  currentView: 'discover',
  setCurrentView: (view) => set({ currentView: view }),

  // Onboarding
  hasOnboarded: loadJson<boolean>(STORAGE_KEY_ONBOARDED, false),
  initialKeywords: loadJson<string[]>(STORAGE_KEY_INITIAL_KW, []),
  completeOnboarding: (keywords) => {
    saveJson(STORAGE_KEY_ONBOARDED, true);
    saveJson(STORAGE_KEY_INITIAL_KW, keywords);
    set({ hasOnboarded: true, initialKeywords: keywords });
  },

  // Feed mode
  feedMode: 'foryou' as FeedMode,
  setFeedMode: (mode) => set({ feedMode: mode, currentIndex: 0 }),

  // Search
  searchQuery: '',
  setSearchQuery: (q) => set({ searchQuery: q }),

  // Paper queue
  paperQueue: [],
  setPaperQueue: (queue) =>
    set((state) => ({
      paperQueue: typeof queue === 'function' ? queue(state.paperQueue) : queue,
    })),
  appendToQueue: (papers) =>
    set((state) => ({ paperQueue: [...state.paperQueue, ...papers] })),

  // Current index
  currentIndex: 0,
  setCurrentIndex: (index) =>
    set((state) => ({
      currentIndex: typeof index === 'function' ? index(state.currentIndex) : index,
    })),

  // Loading
  isLoading: true,
  setIsLoading: (v) => set({ isLoading: v }),
  loadingMore: false,
  setLoadingMore: (v) => set({ loadingMore: v }),

  // Saved papers
  savedIds: loadJson<string[]>(STORAGE_KEY_SAVED, []),
  toggleSave: (id) =>
    set((state) => {
      const exists = state.savedIds.includes(id);
      const newIds = exists
        ? state.savedIds.filter((sid) => sid !== id)
        : [...state.savedIds, id];
      saveJson(STORAGE_KEY_SAVED, newIds);
      return { savedIds: newIds };
    }),
  isSaved: (id) => get().savedIds.includes(id),

  // Keyword profile
  keywordProfile: loadKeywordProfile(),
  updateKeywordProfile: (keywords, action) =>
    set((state) => {
      const now = Date.now();
      const newProfile: KeywordProfile = { ...state.keywordProfile };
      for (const kw of keywords) {
        const normalized = kw.toLowerCase().trim();
        const prev = newProfile[normalized] || { saves: 0, skips: 0, lastTs: now };
        newProfile[normalized] = {
          saves: prev.saves + (action === 'save' ? 1 : 0),
          skips: prev.skips + (action === 'skip' ? 1 : 0),
          lastTs: now,
        };
      }
      saveJson(STORAGE_KEY_PROFILE, newProfile);
      return { keywordProfile: newProfile };
    }),
  get topKeywords() {
    const profile = get().keywordProfile;
    const now = Date.now();
    return Object.entries(profile)
      .map(([k, stats]) => [k, keywordWeight(stats, now)] as const)
      .filter(([, w]) => w > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([k]) => k)
      .slice(0, 10);
  },
  get dislikedKeywords() {
    const profile = get().keywordProfile;
    const now = Date.now();
    return Object.entries(profile)
      .map(([k, stats]) => [k, keywordWeight(stats, now)] as const)
      .filter(([, w]) => w < -0.3)
      .sort((a, b) => a[1] - b[1])
      .map(([k]) => k)
      .slice(0, 10);
  },

  // Interactions
  interactions: loadJson<Interaction[]>(STORAGE_KEY_INTERACTIONS, []),
  addInteraction: (interaction) =>
    set((state) => {
      const now = Date.now();
      const newInteraction = { ...interaction, timestamp: now };
      const newInteractions = [...state.interactions, newInteraction];
      saveJson(STORAGE_KEY_INTERACTIONS, newInteractions);

      // Also update keyword profile (only save/skip affect the profile)
      let newProfile = state.keywordProfile;
      if (interaction.action === 'save' || interaction.action === 'skip') {
        newProfile = { ...state.keywordProfile };
        for (const kw of interaction.keywords) {
          const normalized = kw.toLowerCase().trim();
          const prev = newProfile[normalized] || { saves: 0, skips: 0, lastTs: now };
          newProfile[normalized] = {
            saves: prev.saves + (interaction.action === 'save' ? 1 : 0),
            skips: prev.skips + (interaction.action === 'skip' ? 1 : 0),
            lastTs: now,
          };
        }
        saveJson(STORAGE_KEY_PROFILE, newProfile);
      }

      return {
        interactions: newInteractions,
        keywordProfile: newProfile,
      };
    }),

  // Detail sheet
  detailPaper: null,
  setDetailPaper: (paper) => set({ detailPaper: paper }),

  // Toast
  toastMessage: '',
  toastVisible: false,
  showToast: (message) => {
    set({ toastMessage: message, toastVisible: true });
    setTimeout(() => set({ toastVisible: false }), 2000);
  },
  hideToast: () => set({ toastVisible: false }),

  // Reset
  resetQueue: () =>
    set({
      paperQueue: [],
      currentIndex: 0,
      keywordProfile: {},
      interactions: [],
      savedIds: [],
    }),
}));
