import { useState, useRef, useCallback } from 'react';
import { ChevronRight, Trash2, ExternalLink } from 'lucide-react';
import type { Paper } from '@/store/useStore';
import { useStore } from '@/store/useStore';

interface CompactCardProps {
  paper: Paper;
}

export function CompactCard({ paper }: CompactCardProps) {
  const { setDetailPaper, toggleSave } = useStore();
  const [isRemoving, setIsRemoving] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const pubmedUrl = paper.doi
    ? `https://doi.org/${paper.doi}`
    : `https://pubmed.ncbi.nlm.nih.gov/${paper.id.replace('pmid_', '')}/`;

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    isDragging.current = false;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const dx = e.clientX - startX.current;
    if (dx < 0) {
      isDragging.current = true;
      setTranslateX(Math.max(dx, -120));
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (translateX < -80) {
      setIsRemoving(true);
      setTimeout(() => {
        toggleSave(paper.id);
      }, 300);
    } else {
      setTranslateX(0);
    }
    isDragging.current = false;
  }, [translateX, toggleSave, paper.id]);

  const handleCardClick = () => {
    if (!isDragging.current) {
      setDetailPaper(paper);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(pubmedUrl, '_blank', 'noopener,noreferrer');
  };

  if (isRemoving) {
    return (
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height: 0, opacity: 0, marginBottom: 0 }}
      />
    );
  }

  // Source color stripe
  const stripeColor = paper.source === 'biorxiv' ? '#D97706' : '#2E5C8A';

  return (
    <div className="relative mb-4">
      {/* Remove background */}
      <div
        className="absolute inset-0 rounded-[20px] flex items-center justify-end pr-6"
        style={{ backgroundColor: '#C44536' }}
      >
        <div className="flex items-center gap-2 text-white">
          <Trash2 className="w-5 h-5" />
          <span className="text-sm font-medium">Remove</span>
        </div>
      </div>

      {/* Card */}
      <div
        className="relative bg-white rounded-[20px] shadow-card-stacked flex items-center overflow-hidden cursor-pointer"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isDragging.current ? 'none' : 'transform 0.3s ease',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleCardClick}
      >
        {/* Color stripe */}
        <div
          className="w-1 self-stretch flex-shrink-0"
          style={{ backgroundColor: stripeColor }}
        />

        {/* Content */}
        <div className="flex-1 min-w-0 px-4 py-3">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: `${stripeColor}15`,
                color: stripeColor,
              }}
            >
              {paper.source === 'biorxiv' ? 'Preprint' : 'PubMed'}
            </span>
          </div>
          <h3 className="text-base font-bold text-charcoal truncate">{paper.title}</h3>
          <p className="text-[13px] text-midgrey truncate">
            {paper.authors.slice(0, 3).join(', ')}
            {paper.authors.length > 3 ? ' et al.' : ''}
          </p>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-xs text-midgrey tracking-[0.02em]">
              {paper.journal} · {paper.year}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 pr-3 flex-shrink-0">
          <button
            onClick={handleLinkClick}
            className="p-2 rounded-full hover:bg-offwhite transition-colors"
            title="View paper"
          >
            <ExternalLink className="w-4 h-4 text-midgrey" />
          </button>
          <ChevronRight className="w-4 h-4 text-midgrey" />
        </div>
      </div>
    </div>
  );
}
