import { useEffect, useCallback } from 'react';
import { FileText, RotateCcw, WifiOff } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { FilterBar } from '@/components/FilterBar';
import { SwipeCard } from '@/components/SwipeCard';
import { EmptyState } from '@/components/EmptyState';
import { usePaperEngine } from '@/hooks/usePaperEngine';

export function SwipeView() {
  const {
    paperQueue,
    currentIndex,
    setCurrentIndex,
    setDetailPaper,
    showToast,
    toggleSave,
    addInteraction,
  } = useStore();

  const { currentPaper, isLoading, loadingMore, isQueueEmpty } = usePaperEngine();

  const handleCardComplete = useCallback(() => {
    // Card already advanced in the swipe handler
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentPaper) return;

      if (e.key === 'ArrowRight') {
        toggleSave(currentPaper.id);
        addInteraction({
          paperId: currentPaper.id,
          action: 'save',
          keywords: currentPaper.keywords,
        });
        showToast('Saved to Read Later');
        setCurrentIndex((prev: number) => prev + 1);
      } else if (e.key === 'ArrowLeft') {
        addInteraction({
          paperId: currentPaper.id,
          action: 'skip',
          keywords: currentPaper.keywords,
        });
        setCurrentIndex((prev: number) => prev + 1);
      } else if (e.key === 'ArrowUp') {
        setDetailPaper(currentPaper);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPaper]);

  const remainingQueue = paperQueue.slice(currentIndex);

  return (
    <div className="h-full flex flex-col">
      {/* Filter Bar */}
      <FilterBar />

      {/* Card Stack Area */}
      <div className="flex-1 relative">
        {isLoading ? (
          // Loading skeleton
          <div className="absolute inset-x-3 top-[100px] bottom-[64px] max-w-[420px] mx-auto">
            <div className="h-full bg-white rounded-[20px] shadow-card-elevated overflow-hidden animate-pulse">
              <div className="h-full flex flex-col p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-16 h-5 rounded bg-gray-200" />
                  <div className="w-24 h-4 rounded bg-gray-200 ml-auto" />
                </div>
                <div className="w-full h-6 rounded bg-gray-200 mb-2" />
                <div className="w-3/4 h-6 rounded bg-gray-200 mb-4" />
                <div className="w-1/2 h-4 rounded bg-gray-200 mb-6" />
                <div className="flex gap-2 mb-4">
                  <div className="w-16 h-5 rounded bg-gray-200" />
                  <div className="w-20 h-5 rounded bg-gray-200" />
                  <div className="w-14 h-5 rounded bg-gray-200" />
                </div>
                <div className="w-full h-px bg-gray-200 mb-4" />
                <div className="flex-1 space-y-2">
                  <div className="w-full h-4 rounded bg-gray-200" />
                  <div className="w-full h-4 rounded bg-gray-200" />
                  <div className="w-5/6 h-4 rounded bg-gray-200" />
                  <div className="w-full h-4 rounded bg-gray-200" />
                  <div className="w-4/5 h-4 rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        ) : isQueueEmpty ? (
          // Error / empty state
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <EmptyState
              icon={WifiOff}
              title="Could not load papers"
              subtitle="Check your connection and try again."
              action={{
                label: 'Retry',
                icon: RotateCcw,
                onClick: () => window.location.reload(),
              }}
            />
          </div>
        ) : remainingQueue.length === 0 ? (
          // All swiped (shouldn't happen with endless loading, but just in case)
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <EmptyState
              icon={FileText}
              title="Loading more..."
              subtitle="Hang tight, finding your next papers."
            />
          </div>
        ) : (
          <>
            {/* Stacked cards behind */}
            {remainingQueue.slice(1, 3).map((paper, idx) => (
              <SwipeCard
                key={`stack-${paper.id}`}
                paper={paper}
                stackIndex={idx + 1}
                onComplete={handleCardComplete}
              />
            ))}

            {/* Active card — force remount on every index change */}
            {remainingQueue[0] && (
              <SwipeCard
                key={`active-${currentIndex}-${remainingQueue[0].id}`}
                paper={remainingQueue[0]}
                stackIndex={0}
                onComplete={handleCardComplete}
              />
            )}

            {/* Loading more indicator */}
            {loadingMore && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 rounded-full shadow-md">
                  <div className="w-4 h-4 border-2 border-sage border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs text-midgrey font-medium">Loading more...</span>
                </div>
              </div>
            )}

            {/* Keyboard hint (desktop) */}
            <div className="hidden lg:block absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-midgrey">
              Use ← → arrow keys
            </div>
          </>
        )}
      </div>
    </div>
  );
}
