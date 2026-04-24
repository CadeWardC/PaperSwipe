import { useEffect, useRef, useCallback } from 'react';
import { useStore, keywordWeight } from '@/store/useStore';
import type { Paper, KeywordProfile } from '@/store/useStore';
import {
  fetchPubmedPapers,
  fetchBiorxivPapers,
  getRandomKeywords,
  buildQueryFromKeywords,
} from '@/services/api';

// ─── Scoring ───

function scorePaper(paper: Paper, profile: KeywordProfile): number {
  const now = Date.now();
  let total = 0;
  let matches = 0;

  for (const kw of paper.keywords) {
    const stats = profile[kw.toLowerCase().trim()];
    if (stats) {
      total += keywordWeight(stats, now);
      matches++;
    }
  }

  if (matches === 0) return 0.001 * (Math.random() - 0.5);
  return total / matches;
}

// ─── Staged warmup ratios ───

interface Ratios {
  exploit: number;
  explore: number;
  random: number;
}

function getExplorationRatios(interactionCount: number): Ratios {
  if (interactionCount < 5)  return { exploit: 0.0, explore: 0.3, random: 0.7 };
  if (interactionCount < 15) return { exploit: 0.4, explore: 0.3, random: 0.3 };
  if (interactionCount < 30) return { exploit: 0.6, explore: 0.25, random: 0.15 };
  return                         { exploit: 0.7, explore: 0.2, random: 0.1 };
}

// ─── Weighted round-robin interleave ───

function interleave(buckets: { ratio: number; items: Paper[] }[]): Paper[] {
  const out: Paper[] = [];
  const cursors = buckets.map(() => 0);
  const total = buckets.reduce((s, b) => s + b.items.length, 0);
  while (out.length < total) {
    let best = -1;
    let bestScore = Infinity;
    for (let i = 0; i < buckets.length; i++) {
      if (cursors[i] >= buckets[i].items.length) continue;
      const s = buckets[i].ratio > 0 ? cursors[i] / buckets[i].ratio : Infinity;
      if (s < bestScore) {
        bestScore = s;
        best = i;
      }
    }
    if (best < 0) break;
    out.push(buckets[best].items[cursors[best]++]);
  }
  return out;
}

// ─── Mix ───

function applyExplorationMix(papers: Paper[], ratios: Ratios): Paper[] {
  if (papers.length < 5) return papers;

  const sorted = [...papers].sort((a, b) => (b.score || 0) - (a.score || 0));
  const n = sorted.length;

  const exploitCount = Math.floor(n * ratios.exploit);
  const exploreCount = Math.floor(n * ratios.explore);

  const exploit = sorted.slice(0, exploitCount);
  const explore = sorted.slice(exploitCount, exploitCount + exploreCount);
  const remaining = sorted.slice(exploitCount + exploreCount);

  // True shuffle for random bucket
  const shuffled = [...remaining];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const randomCount = Math.min(Math.floor(n * ratios.random), shuffled.length);
  const random = shuffled.slice(0, randomCount);

  return interleave([
    { ratio: ratios.exploit, items: exploit },
    { ratio: ratios.explore, items: explore },
    { ratio: ratios.random, items: random },
  ]);
}

// ─── Engine ───

export function usePaperEngine() {
  const {
    paperQueue,
    currentIndex,
    feedMode,
    searchQuery,
    keywordProfile,
    interactions,
    initialKeywords,
    setPaperQueue,
    appendToQueue,
    setIsLoading,
    setLoadingMore,
    isLoading,
    loadingMore,
  } = useStore();

  const pubmedPageRef = useRef(1);
  const biorxivPageRef = useRef(1);
  const isFetchingRef = useRef(false);

  const remainingQueue = paperQueue.slice(currentIndex);
  const needsRefill = remainingQueue.length < 5 && !loadingMore && !isFetchingRef.current;

  // ─── Fetch a batch ───
  const fetchBatch = useCallback(
    async (isInitial: boolean = false): Promise<Paper[]> => {
      const allPapers: Paper[] = [];

      try {
        if (feedMode === 'preprints') {
          // bioRxiv via Europe PMC
          const papers = await fetchBiorxivPapers(biorxivPageRef.current);
          biorxivPageRef.current++;
          allPapers.push(...papers);
        } else if (feedMode === 'random') {
          // Random keywords
          const randomKws = getRandomKeywords(3);
          const query = buildQueryFromKeywords(randomKws);
          const papers = await fetchPubmedPapers(query, pubmedPageRef.current);
          pubmedPageRef.current++;
          allPapers.push(...papers);
        } else {
          // For You mode
          let query: string;

          if (searchQuery.trim()) {
            query = searchQuery.trim();
          } else if (isInitial) {
            // Use onboarding keywords if available, otherwise random
            if (initialKeywords.length > 0) {
              query = buildQueryFromKeywords(initialKeywords.slice(0, 5));
            } else {
              const randomKws = getRandomKeywords(3);
              query = buildQueryFromKeywords(randomKws);
            }
          } else {
            const now = Date.now();
            const topKws = Object.entries(keywordProfile)
              .map(([k, stats]) => [k, keywordWeight(stats, now)] as const)
              .filter(([, w]) => w > 0)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([k]) => k);

            if (topKws.length > 0) {
              query = buildQueryFromKeywords(topKws);
            } else {
              const randomKws = getRandomKeywords(3);
              query = buildQueryFromKeywords(randomKws);
            }
          }

          const pubmedPapers = await fetchPubmedPapers(query, pubmedPageRef.current);
          pubmedPageRef.current++;
          allPapers.push(...pubmedPapers);

          // Mix in ~30% bioRxiv preprints
          try {
            const biorxivPapers = await fetchBiorxivPapers(biorxivPageRef.current);
            biorxivPageRef.current++;
            const sliceCount = Math.floor(pubmedPapers.length * 0.35);
            allPapers.push(...biorxivPapers.slice(0, sliceCount));
          } catch {
            // bioRxiv fetch is optional
          }
        }
      } catch (err) {
        console.error('Fetch error:', err);
        throw err;
      }

      return allPapers;
    },
    [feedMode, searchQuery, keywordProfile, initialKeywords]
  );

  // ─── Score and mix ───
  const processBatch = useCallback(
    (papers: Paper[]): Paper[] => {
      const seen = new Set(paperQueue.map((p) => p.id));
      const unique = papers.filter((p) => !seen.has(p.id));

      const scored = unique.map((p) => ({
        ...p,
        score: scorePaper(p, keywordProfile),
      }));

      const ratios = getExplorationRatios(interactions.length);
      return applyExplorationMix(scored, ratios);
    },
    [keywordProfile, paperQueue, interactions.length]
  );

  // ─── Initial load ───
  useEffect(() => {
    if (paperQueue.length > 0 || isFetchingRef.current) return;

    isFetchingRef.current = true;
    setIsLoading(true);

    fetchBatch(true)
      .then((papers) => {
        const processed = processBatch(papers);
        setPaperQueue(processed);
      })
      .catch(() => {
        // Error state shown in UI
      })
      .finally(() => {
        setIsLoading(false);
        isFetchingRef.current = false;
      });
  }, []);

  // ─── Refill ───
  useEffect(() => {
    if (!needsRefill || isFetchingRef.current) return;

    isFetchingRef.current = true;
    setLoadingMore(true);

    fetchBatch(false)
      .then((papers) => {
        const processed = processBatch(papers);
        appendToQueue(processed);
      })
      .catch((err) => {
        console.error('Refill error:', err);
      })
      .finally(() => {
        setLoadingMore(false);
        isFetchingRef.current = false;
      });
  }, [needsRefill, fetchBatch, processBatch]);

  // ─── Reset on mode change ───
  useEffect(() => {
    pubmedPageRef.current = 1;
    biorxivPageRef.current = 1;
  }, [feedMode]);

  const currentPaper = paperQueue[currentIndex] || null;
  const isQueueEmpty = paperQueue.length === 0 && !isLoading;

  return {
    currentPaper,
    isLoading,
    loadingMore,
    isQueueEmpty,
  };
}
