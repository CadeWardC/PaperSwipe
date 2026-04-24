import { Search, Sparkles, Shuffle, FlaskConical, X, Hash, Plus } from 'lucide-react';
import { useStore, keywordWeight, type FeedMode } from '@/store/useStore';
import { useState, useRef, useEffect } from 'react';

const MODES: { id: FeedMode; label: string; icon: typeof Sparkles }[] = [
  { id: 'foryou', label: 'For You', icon: Sparkles },
  { id: 'random', label: 'Random', icon: Shuffle },
  { id: 'preprints', label: 'Preprints', icon: FlaskConical },
];

const POPULAR_SEARCHES = [
  'CRISPR', 'Cancer', 'Neuroscience', 'Machine Learning',
  'Immunology', 'Genomics', 'COVID-19', 'Microbiome',
  'Drug Discovery', 'Climate Biology',
];

export function FilterBar() {
  const {
    feedMode,
    setFeedMode,
    searchQuery,
    setSearchQuery,
    keywordProfile,
    initialKeywords,
    paperQueue,
    setPaperQueue,
    setCurrentIndex,
  } = useStore();

  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Focus input when search opens
  useEffect(() => {
    if (isSearching && searchInputRef.current) {
      searchInputRef.current.focus();
      setShowSuggestions(true);
    }
  }, [isSearching]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const executeSearch = (q: string) => {
    setSearchQuery(q);
    setPaperQueue([]);
    setCurrentIndex(0);
    setShowSuggestions(false);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const q = searchQuery.trim();
      if (q) {
        executeSearch(q);
      }
    }
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleModeChange = (mode: FeedMode) => {
    setFeedMode(mode);
    setPaperQueue([]);
    setCurrentIndex(0);
  };

  const clearSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
    setShowSuggestions(false);
    setPaperQueue([]);
    setCurrentIndex(0);
  };

  // Get top keywords for display
  const topKeywords = Object.entries(keywordProfile)
    .map(([k, stats]) => [k, keywordWeight(stats)] as const)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([k]) => k);

  // Build suggestion list: combine user's initial keywords, profile keywords, and popular ones
  const allSuggestions = [
    ...initialKeywords,
    ...topKeywords,
    ...POPULAR_SEARCHES,
  ].filter((kw, i, arr) => arr.findIndex((k) => k.toLowerCase() === kw.toLowerCase()) === i);

  const filteredSuggestions = searchQuery.trim()
    ? allSuggestions.filter((kw) =>
        kw.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allSuggestions;

  // Determine the active keyword pills to show (initial + profile top)
  const displayKeywords = [
    ...initialKeywords,
    ...topKeywords.filter((k) => !initialKeywords.some((ik) => ik.toLowerCase() === k.toLowerCase())),
  ].slice(0, 6);

  return (
    <div className="fixed top-0 left-0 right-0 z-[15] bg-offwhite border-b border-black/[0.05]">
      <div className="mx-auto max-w-[640px]">
        {/* Search row */}
        <div className="flex items-center gap-2 px-4 pt-2 pb-1">
          {isSearching ? (
            <div className="flex-1 relative" ref={suggestionsRef}>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 h-9 border border-[#E0E0DE] focus-within:border-sage/40 focus-within:shadow-sm transition-all">
                <Search className="w-4 h-4 text-midgrey flex-shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyDown={handleSearch}
                  placeholder="Search papers, keywords, topics..."
                  className="flex-1 text-sm bg-transparent outline-none text-charcoal placeholder:text-midgrey"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-0.5 rounded-full hover:bg-offwhite transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-midgrey" />
                  </button>
                )}
                <button
                  onClick={clearSearch}
                  className="text-xs text-midgrey hover:text-charcoal font-medium"
                >
                  Cancel
                </button>
              </div>

              {/* Search suggestions dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-lg border border-black/[0.06] overflow-hidden z-30">
                  <div className="px-3 py-2">
                    <span className="text-[10px] font-semibold text-midgrey uppercase tracking-[0.08em]">
                      {searchQuery ? 'Matching Topics' : 'Suggested Topics'}
                    </span>
                  </div>
                  <div className="max-h-[200px] overflow-y-auto">
                    {filteredSuggestions.slice(0, 10).map((kw) => {
                      const isFromProfile = topKeywords.some(
                        (tk) => tk.toLowerCase() === kw.toLowerCase()
                      );
                      const isFromInitial = initialKeywords.some(
                        (ik) => ik.toLowerCase() === kw.toLowerCase()
                      );
                      return (
                        <button
                          key={kw}
                          onClick={() => executeSearch(kw)}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-offwhite transition-colors"
                        >
                          <Hash className="w-3.5 h-3.5 text-midgrey/60 flex-shrink-0" />
                          <span className="text-[13px] text-charcoal flex-1">{kw}</span>
                          {isFromInitial && (
                            <span className="text-[10px] font-medium text-sage bg-sage/10 px-1.5 py-0.5 rounded">
                              Your pick
                            </span>
                          )}
                          {isFromProfile && !isFromInitial && (
                            <span className="text-[10px] font-medium text-sage/70 bg-sage/5 px-1.5 py-0.5 rounded">
                              Trending for you
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => setIsSearching(true)}
                className="flex-1 flex items-center gap-2 bg-white rounded-full px-3 h-9 border border-[#E0E0DE] text-left hover:border-sage/20 transition-colors"
              >
                <Search className="w-4 h-4 text-midgrey" />
                <span className="text-sm text-midgrey">Search papers...</span>
              </button>
              {/* Source indicator */}
              <span className="text-[11px] text-midgrey whitespace-nowrap">
                {paperQueue.length > 0
                  ? `${paperQueue.length} loaded`
                  : 'Loading...'}
              </span>
            </>
          )}
        </div>

        {/* Mode tabs */}
        <div className="flex gap-2 px-4 py-1.5 overflow-x-auto scrollbar-hide">
          {MODES.map((mode) => {
            const isActive = feedMode === mode.id;
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => handleModeChange(mode.id)}
                className="flex items-center gap-1.5 flex-shrink-0 h-8 px-3 rounded-full text-[13px] font-medium tracking-[0.02em] transition-all duration-200"
                style={{
                  backgroundColor: isActive ? '#2E5236' : '#F0F0EE',
                  color: isActive ? '#FFFFFF' : '#1A1A18',
                  border: isActive ? 'none' : '1px solid #E0E0DE',
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {mode.label}
              </button>
            );
          })}
        </div>

        {/* Keyword pills (show initial keywords + top profile keywords) */}
        {displayKeywords.length > 0 && (
          <div className="flex gap-1.5 px-4 pb-2 overflow-x-auto scrollbar-hide">
            {displayKeywords.map((kw) => {
              const isActiveSearch = searchQuery.toLowerCase() === kw.toLowerCase();
              return (
                <button
                  key={kw}
                  onClick={() => {
                    if (isActiveSearch) {
                      // Toggle off — clear search
                      clearSearch();
                    } else {
                      executeSearch(kw);
                    }
                  }}
                  className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-[0.04em] transition-all duration-200"
                  style={{
                    backgroundColor: isActiveSearch ? '#2E5236' : 'rgba(46, 82, 54, 0.1)',
                    color: isActiveSearch ? '#fff' : '#2E5236',
                  }}
                >
                  {kw}
                  {isActiveSearch && <X className="w-2.5 h-2.5" />}
                </button>
              );
            })}
            <button
              onClick={() => setIsSearching(true)}
              className="flex-shrink-0 flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-[0.04em] bg-offwhite text-midgrey border border-dashed border-midgrey/30 hover:border-sage/40 hover:text-sage transition-colors"
            >
              <Plus className="w-2.5 h-2.5" />
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
