import { useState } from 'react';
import { Bookmark, RotateCcw, Settings, RotateCw, ChevronLeft, AlertTriangle, Trash2, GraduationCap } from 'lucide-react';
import { useStore, keywordWeight } from '@/store/useStore';
import { CompactCard } from '@/components/CompactCard';
import { EmptyState } from '@/components/EmptyState';
import { KeywordScores } from '@/components/KeywordScores';

export function SavedView() {
  const {
    savedIds, keywordProfile, paperQueue, setCurrentView,
    resetScores, resetAll, showToast,
    foundationMode, setFoundationMode,
    setPaperQueue, setCurrentIndex,
  } = useStore();
  const [showSettings, setShowSettings] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmResetAll, setConfirmResetAll] = useState(false);

  // Get saved papers from the queue
  const savedPapers = paperQueue.filter((p) => savedIds.includes(p.id));

  const savedCount = savedIds.length;

  const scoredProfile: Record<string, number> = Object.fromEntries(
    Object.entries(keywordProfile).map(([k, stats]) => [k, keywordWeight(stats)])
  );

  const handleResetScores = () => {
    resetScores();
    setConfirmReset(false);
    setShowSettings(false);
    showToast('Taste profile reset');
  };

  const handleResetAll = () => {
    resetAll();
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-[15] bg-offwhite border-b border-black/[0.05]">
        <div className="mx-auto max-w-[640px] flex items-center justify-between h-[60px] px-4">
          {showSettings ? (
            <button
              onClick={() => {
                setShowSettings(false);
                setConfirmReset(false);
              }}
              className="flex items-center gap-1 text-sm text-midgrey hover:text-charcoal transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div className="w-[60px]" />
          )}

          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-charcoal tracking-tight">
              {showSettings ? 'Settings' : 'Read Later'}
            </h2>
            {!showSettings && (
              <span className="text-xs text-midgrey tracking-[0.02em]">
                {savedCount} paper{savedCount !== 1 ? 's' : ''} saved
              </span>
            )}
          </div>

          {showSettings ? (
            <div className="w-[60px]" />
          ) : (
            <button
              onClick={() => setShowSettings(true)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-[18px] h-[18px] text-midgrey" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-[60px] mb-14 px-4 pt-4">
        {showSettings ? (
          /* ─── Settings Panel ─── */
          <div className="max-w-[480px] mx-auto space-y-3">
            {/* Foundation Mode */}
            <div className="bg-white rounded-[16px] shadow-card-stacked overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-sage" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] font-semibold text-charcoal mb-0.5">
                        Foundation Mode
                      </h3>
                      {/* Toggle switch */}
                      <button
                        onClick={() => {
                          setFoundationMode(!foundationMode);
                          setPaperQueue([]);
                          setCurrentIndex(0);
                          showToast(foundationMode ? 'Foundation mode off' : 'Foundation mode on');
                        }}
                        className="relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0"
                        style={{
                          backgroundColor: foundationMode ? '#2E5236' : '#D0D0CE',
                        }}
                      >
                        <div
                          className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200"
                          style={{
                            transform: foundationMode ? 'translateX(22px)' : 'translateX(2px)',
                          }}
                        />
                      </button>
                    </div>
                    <p className="text-[12px] text-midgrey leading-relaxed pr-2">
                      Show older, highly-cited foundational papers first. As you save more papers, newer research is gradually mixed in.
                    </p>
                  </div>
                </div>

                {/* Progress indicator */}
                {foundationMode && (
                  <div className="mt-3 p-3 rounded-xl bg-offwhite" style={{ animation: 'fadeSlideIn 0.2s ease-out' }}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-medium text-midgrey">Feed Composition</span>
                      <span className="text-[11px] text-midgrey">
                        {savedCount} / 30 papers to full transition
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white overflow-hidden flex">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.max(5, Math.round(Math.max(0, 1 - savedCount / 30) * 100))}%`,
                          background: 'linear-gradient(90deg, #2E5236, #4a7c54)',
                        }}
                      />
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(95, Math.round(Math.min(1, savedCount / 30) * 100))}%`,
                          background: 'linear-gradient(90deg, #6B9BD2, #2E5C8A)',
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-sage" />
                        <span className="text-[10px] text-midgrey">Foundational</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: '#2E5C8A' }} />
                        <span className="text-[10px] text-midgrey">Recent</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reset Taste Profile */}
            <div className="bg-white rounded-[16px] shadow-card-stacked overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C44536]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <RotateCw className="w-4 h-4 text-[#C44536]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-semibold text-charcoal mb-0.5">
                      Reset Taste Profile
                    </h3>
                    <p className="text-[12px] text-midgrey leading-relaxed">
                      Clear all keyword scores and interaction history. Your "For You" feed will start fresh with new recommendations.
                    </p>
                  </div>
                </div>

                {!confirmReset ? (
                  <button
                    onClick={() => setConfirmReset(true)}
                    className="w-full mt-3 h-10 rounded-xl border border-[#C44536]/20 text-[13px] font-semibold text-[#C44536] hover:bg-[#C44536]/5 transition-colors"
                  >
                    Reset Scores
                  </button>
                ) : (
                  <div
                    className="mt-3 p-3 rounded-xl border border-[#C44536]/20 bg-[#C44536]/[0.03]"
                    style={{
                      animation: 'fadeSlideIn 0.2s ease-out',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-[#C44536]" />
                      <span className="text-[12px] font-semibold text-[#C44536]">
                        Are you sure?
                      </span>
                    </div>
                    <p className="text-[11px] text-midgrey mb-3 leading-relaxed">
                      This will erase all your keyword preferences. Your saved papers will not be affected.
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setConfirmReset(false)}
                        className="flex-1 h-9 rounded-lg bg-offwhite text-[12px] font-semibold text-charcoal hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleResetScores}
                        className="flex-1 h-9 rounded-lg bg-[#C44536] text-[12px] font-semibold text-white hover:bg-[#B33D2F] transition-colors"
                      >
                        Yes, Reset
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Current Profile Stats */}
            {Object.keys(keywordProfile).length > 0 && (
              <div className="bg-white rounded-[16px] shadow-card-stacked p-4">
                <h3 className="text-[13px] font-semibold text-charcoal mb-1">Profile Stats</h3>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-offwhite rounded-xl p-3 text-center">
                    <span className="block text-[20px] font-bold text-charcoal">
                      {Object.keys(keywordProfile).length}
                    </span>
                    <span className="text-[11px] text-midgrey">Keywords tracked</span>
                  </div>
                  <div className="bg-offwhite rounded-xl p-3 text-center">
                    <span className="block text-[20px] font-bold text-charcoal">
                      {Object.values(keywordProfile).reduce(
                        (sum, s) => sum + s.saves + s.skips,
                        0
                      )}
                    </span>
                    <span className="text-[11px] text-midgrey">Total swipes</span>
                  </div>
                </div>
              </div>
            )}

            {/* Total Reset */}
            <div className="bg-white rounded-[16px] shadow-card-stacked overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-semibold text-charcoal mb-0.5">
                      Total Reset
                    </h3>
                    <p className="text-[12px] text-midgrey leading-relaxed">
                      Erase everything — saved papers, taste profile, and preferences. You'll be taken back to the keyword selection screen.
                    </p>
                  </div>
                </div>

                {!confirmResetAll ? (
                  <button
                    onClick={() => setConfirmResetAll(true)}
                    className="w-full mt-3 h-10 rounded-xl border border-red-500/20 text-[13px] font-semibold text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Reset Everything
                  </button>
                ) : (
                  <div
                    className="mt-3 p-3 rounded-xl border border-red-500/20 bg-red-50/50"
                    style={{
                      animation: 'fadeSlideIn 0.2s ease-out',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <span className="text-[12px] font-semibold text-red-600">
                        This cannot be undone
                      </span>
                    </div>
                    <p className="text-[11px] text-midgrey mb-3 leading-relaxed">
                      All saved papers, keyword scores, and your topic selections will be permanently deleted.
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setConfirmResetAll(false)}
                        className="flex-1 h-9 rounded-lg bg-offwhite text-[12px] font-semibold text-charcoal hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleResetAll}
                        className="flex-1 h-9 rounded-lg bg-red-600 text-[12px] font-semibold text-white hover:bg-red-700 transition-colors"
                      >
                        Yes, Erase All
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ─── Normal Saved View ─── */
          <>
            {/* Keyword Taste Profile */}
            <KeywordScores profile={scoredProfile} />

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
          </>
        )}
      </div>

      {/* Inline animation */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
