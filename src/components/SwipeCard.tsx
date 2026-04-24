import type { Paper } from '@/store/useStore';
import { useCardSwipe } from '@/hooks/useCardSwipe';
import { useStore } from '@/store/useStore';
import { useHaptic } from '@/hooks/useHaptic';

interface SwipeCardProps {
  paper: Paper;
  stackIndex: number;
  onComplete: () => void;
}

export function SwipeCard({ paper, stackIndex, onComplete }: SwipeCardProps) {
  const { setDetailPaper, toggleSave, showToast, setCurrentIndex, addInteraction } =
    useStore();
  const haptic = useHaptic();

  const handleSwipeLeft = () => {
    haptic('light');
    addInteraction({ paperId: paper.id, action: 'skip', keywords: paper.keywords });
    setCurrentIndex((prev) => prev + 1);
    onComplete();
  };

  const handleSwipeRight = () => {
    haptic('light');
    toggleSave(paper.id);
    addInteraction({ paperId: paper.id, action: 'save', keywords: paper.keywords });
    showToast('Saved to Read Later');
    setCurrentIndex((prev) => prev + 1);
    onComplete();
  };

  const handleTap = () => {
    setDetailPaper(paper);
  };

  const {
    cardRef,
    swipeState,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
  } = useCardSwipe({
    paperId: paper.id,
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
    onTap: handleTap,
  });

  // Stack positioning
  const isActive = stackIndex === 0;
  const scale = isActive ? 1 : stackIndex === 1 ? 0.96 : 0.92;
  const offsetY = isActive ? 0 : stackIndex === 1 ? 8 : 16;
  const stackOpacity = isActive ? 1 : stackIndex === 1 ? 0.6 : 0.3;

  const cardStyle: React.CSSProperties = isActive
    ? {
        transform: `translate3d(${swipeState.x}px, ${swipeState.y}px, 0) rotate(${swipeState.rotation}deg) scale(${scale})`,
        opacity: swipeState.isDragging ? swipeState.opacity : stackOpacity,
        transition: swipeState.isDragging
          ? 'none'
          : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease',
        zIndex: 10 - stackIndex,
        cursor: swipeState.isDragging ? 'grabbing' : 'grab',
      }
    : {
        transform: `translateY(${offsetY}px) scale(${scale})`,
        opacity: stackOpacity,
        zIndex: 10 - stackIndex,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      };

  if (stackIndex > 2) return null;

  // Source badge color
  const sourceColor = paper.source === 'biorxiv' ? '#D97706' : '#2E5C8A';
  const sourceLabel = paper.source === 'biorxiv' ? 'Preprint' : 'PubMed';

  return (
    <div
      ref={isActive ? cardRef : undefined}
      className="absolute inset-x-3 top-[100px] bottom-[64px] max-w-[420px] mx-auto bg-white rounded-[20px] shadow-card-elevated overflow-hidden select-none"
      style={{
        ...cardStyle,
        willChange: isActive && swipeState.isDragging ? 'transform' : 'auto',
        touchAction: 'none',
      }}
      onPointerDown={isActive ? handlePointerDown : undefined}
      onPointerMove={isActive ? handlePointerMove : undefined}
      onPointerUp={isActive ? handlePointerUp : undefined}
      onPointerCancel={isActive ? handlePointerCancel : undefined}
    >
      {/* Swipe indicators */}
      {isActive && (
        <>
          <div
            className="absolute right-6 top-[20%] z-20 pointer-events-none"
            style={{
              opacity: swipeState.showRead ? 1 : 0,
              transform: `scale(${swipeState.showRead ? 1 : 0.5}) rotate(-15deg)`,
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            <div className="border-[3px] border-sage/70 px-4 py-2 rounded-lg">
              <span className="text-[32px] font-bold tracking-[0.08em] text-sage/70">READ</span>
            </div>
          </div>

          <div
            className="absolute left-6 top-[20%] z-20 pointer-events-none"
            style={{
              opacity: swipeState.showSkip ? 1 : 0,
              transform: `scale(${swipeState.showSkip ? 1 : 0.5}) rotate(15deg)`,
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            <div className="border-[3px] border-[#C44536]/70 px-4 py-2 rounded-lg">
              <span className="text-[32px] font-bold tracking-[0.08em] text-[#C44536]/70">SKIP</span>
            </div>
          </div>
        </>
      )}

      {/* Card content */}
      <div className="h-full flex flex-col p-4">
        {/* Meta row: source badge + journal/year */}
        <div className="flex items-center justify-between gap-2 mb-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span
              className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${sourceColor}15`,
                color: sourceColor,
              }}
            >
              {sourceLabel}
            </span>
          </div>
          <span className="text-xs text-midgrey tracking-[0.02em] whitespace-nowrap">
            {paper.journal} · {paper.year}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[19px] font-bold text-charcoal leading-[1.25] tracking-[-0.01em] mb-1.5 flex-shrink-0 line-clamp-2">
          {paper.title}
        </h2>

        {/* Authors */}
        <p className="text-[12px] text-midgrey leading-[1.4] mb-2 flex-shrink-0 line-clamp-1">
          {paper.authors.join(', ')}
        </p>

        {/* Keywords pills */}
        {paper.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2 flex-shrink-0">
            {paper.keywords.slice(0, 6).map((kw) => (
              <span
                key={kw}
                className="px-1.5 py-0.5 rounded bg-offwhite text-[10px] text-midgrey font-medium"
              >
                {kw}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="w-full h-px bg-[#E8E8E6] mb-2 flex-shrink-0" />

        {/* Abstract — scrollable, takes remaining space */}
        <div className="flex-1 relative overflow-y-auto min-h-0">
          <p className="text-[14px] text-charcoal leading-[1.6] pr-1">
            {paper.abstract}
          </p>
        </div>

        {/* Read More */}
        <div className="pt-1.5 text-center flex-shrink-0">
          <span className="text-[12px] font-medium text-midgrey">Read More ↓</span>
        </div>
      </div>
    </div>
  );
}
