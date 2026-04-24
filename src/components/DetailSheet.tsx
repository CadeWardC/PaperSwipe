import { useCallback, useRef, useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function DetailSheet() {
  const { detailPaper, setDetailPaper } = useStore();
  const sheetRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [backdropOpacity, setBackdropOpacity] = useState(0);
  const startY = useRef(0);
  const isDraggingSheet = useRef(false);

  // Animate in
  useEffect(() => {
    if (detailPaper) {
      setIsVisible(true);
      setTranslateY(0);
      requestAnimationFrame(() => {
        setBackdropOpacity(1);
      });
    }
  }, [detailPaper]);

  const dismiss = useCallback(() => {
    setBackdropOpacity(0);
    setTranslateY(window.innerHeight);
    setTimeout(() => {
      setIsVisible(false);
      setDetailPaper(null);
      setTranslateY(0);
    }, 300);
  }, [setDetailPaper]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = sheetRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    startY.current = e.clientY;
    isDraggingSheet.current = false;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const dy = e.clientY - startY.current;
    if (dy > 0) {
      isDraggingSheet.current = true;
      setTranslateY(dy);
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (translateY > 120) {
      dismiss();
    } else {
      setTranslateY(0);
    }
    isDraggingSheet.current = false;
  }, [translateY, dismiss]);

  if (!isVisible || !detailPaper) return null;

  const paperUrl = detailPaper.doi
    ? `https://doi.org/${detailPaper.doi}`
    : `https://pubmed.ncbi.nlm.nih.gov/${detailPaper.id.replace('pmid_', '')}/`;

  const sourceColor = detailPaper.source === 'biorxiv' ? '#D97706' : '#2E5C8A';
  const sourceLabel = detailPaper.source === 'biorxiv' ? 'Preprint' : 'PubMed';

  return (
    <div className="fixed inset-0 z-30">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity duration-300"
        style={{ opacity: backdropOpacity * 0.4 }}
        onClick={dismiss}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] max-h-[90vh] flex flex-col"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: isDraggingSheet.current
            ? 'none'
            : 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
          boxShadow: '0 -4px 32px rgba(0, 0, 0, 0.12)',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2 pointer-events-none">
          <div className="w-9 h-1 rounded-full bg-[#D0D0CE]" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-8">
          {/* Source badge */}
          <div className="mb-3">
            <span
              className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-[0.06em]"
              style={{
                backgroundColor: `${sourceColor}15`,
                color: sourceColor,
              }}
            >
              {sourceLabel} · {detailPaper.journal}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[22px] font-bold text-charcoal leading-[1.25] tracking-[-0.01em] mb-3">
            {detailPaper.title}
          </h2>

          {/* Authors */}
          <p className="text-[13px] text-charcoal leading-[1.45] mb-2">
            {detailPaper.authors.join(', ')}
          </p>

          {/* Year/DOI */}
          <p className="text-xs text-midgrey tracking-[0.02em] mb-3">
            {detailPaper.year}
            {detailPaper.doi ? ` · DOI: ${detailPaper.doi}` : ''}
          </p>

          {/* Keywords */}
          {detailPaper.keywords.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {detailPaper.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-1 rounded-md bg-offwhite text-[11px] text-midgrey font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="w-full h-px bg-[#E8E8E6] mb-4" />

          {/* Abstract */}
          <p className="text-[15px] text-charcoal leading-[1.65] mb-6">
            {detailPaper.abstract}
          </p>

          {/* View paper button */}
          <a
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-charcoal text-white rounded-xl text-[13px] font-semibold hover:bg-charcoal/90 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {detailPaper.source === 'biorxiv' ? 'View on bioRxiv' : 'View Paper'}
          </a>
        </div>
      </div>
    </div>
  );
}
