import { Bookmark, RotateCcw } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { CompactCard } from '@/components/CompactCard';
import { EmptyState } from '@/components/EmptyState';
import { KeywordScores } from '@/components/KeywordScores';

export function SavedView() {
  const { savedIds, keywordProfile, paperQueue, setCurrentView } = useStore();

  // Get saved papers from the queue
  const savedPapers = paperQueue.filter((p) => savedIds.includes(p.id));

  const savedCount = savedIds.length;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-[15] bg-offwhite border-b border-black/[0.05]">
        <div className="mx-auto max-w-[640px] flex flex-col items-center justify-center h-[60px]">
          <h2 className="text-lg font-semibold text-charcoal tracking-tight">Read Later</h2>
          <span className="text-xs text-midgrey tracking-[0.02em]">
            {savedCount} paper{savedCount !== 1 ? 's' : ''} saved
          </span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-[60px] mb-14 px-4 pt-4">
        {/* Keyword Taste Profile */}
        <KeywordScores profile={keywordProfile} />

        {/* Saved Paper Cards */}
        {savedPapers.length > 0 ? (
          savedPapers.map((paper) => <CompactCard key={paper.id} paper={paper} />)
        ) : (
          <div className="py-8">
            <EmptyState
              icon={Bookmark}
              title="No papers saved yet"
              subtitle="Swipe right on papers you want to read later."
              action={{
                label: 'Start Swiping',
                icon: RotateCcw,
                onClick: () => setCurrentView('discover'),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
