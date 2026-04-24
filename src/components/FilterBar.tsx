import { Search, Sparkles, Shuffle, FlaskConical } from 'lucide-react';
import { useStore, keywordWeight, type FeedMode } from '@/store/useStore';
import { useState, useRef, useEffect } from 'react';

const MODES: { id: FeedMode; label: string; icon: typeof Sparkles }[] = [
  { id: 'foryou', label: 'For You', icon: Sparkles },
  { id: 'random', label: 'Random', icon: Shuffle },
  { id: 'preprints', label: 'Preprints', icon: FlaskConical },
];

export function FilterBar() {
  const {
    feedMode,
    setFeedMode,
    searchQuery,
    setSearchQuery,
    keywordProfile,
    paperQueue,
    setPaperQueue,
    setCurrentIndex,
  } = useStore();

  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus input when search opens
  useEffect(() => {
    if (isSearching && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearching]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const q = searchQuery.trim();
      if (q) {
        // Clear queue and trigger refetch
        setPaperQueue([]);
        setCurrentIndex(0);
      }
    }
  };

  const handleModeChange = (mode: FeedMode) => {
    setFeedMode(mode);
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

  return (
    <div className="fixed top-0 left-0 right-0 z-[15] bg-offwhite border-b border-black/[0.05]">
      <div className="mx-auto max-w-[640px]">
        {/* Search row */}
        <div className="flex items-center gap-2 px-4 pt-2 pb-1">
          {isSearching ? (
            <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-3 h-9 border border-[#E0E0DE]">
              <Search className="w-4 h-4 text-midgrey flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search papers, keywords..."
                className="flex-1 text-sm bg-transparent outline-none text-charcoal placeholder:text-midgrey"
              />
              <button
                onClick={() => {
                  setIsSearching(false);
                  setSearchQuery('');
                  setPaperQueue([]);
                  setCurrentIndex(0);
                }}
                className="text-xs text-midgrey hover:text-charcoal"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setIsSearching(true)}
                className="flex-1 flex items-center gap-2 bg-white rounded-full px-3 h-9 border border-[#E0E0DE] text-left"
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

        {/* Keyword pills (show top keywords from profile) */}
        {topKeywords.length > 0 && (
          <div className="flex gap-1.5 px-4 pb-2 overflow-x-auto scrollbar-hide">
            {topKeywords.map((kw) => (
              <span
                key={kw}
                className="flex-shrink-0 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-[0.04em] bg-sage/10 text-sage"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
