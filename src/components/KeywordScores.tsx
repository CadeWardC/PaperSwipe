import { ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

interface KeywordScoresProps {
  profile: Record<string, number>;
}

export function KeywordScores({ profile }: KeywordScoresProps) {
  const entries = Object.entries(profile);
  if (entries.length === 0) return null;

  // Split into liked (positive) and disliked (negative)
  const liked = entries
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const disliked = entries
    .filter(([, v]) => v < -0.5)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 5);

  // Find max for bar scaling
  const maxScore = Math.max(...liked.map(([, v]) => v), 1);
  const minScore = Math.min(...disliked.map(([, v]) => v), -1);

  return (
    <div className="bg-white rounded-[16px] shadow-card-stacked p-4 mb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-sage" />
        <h3 className="text-sm font-semibold text-charcoal">Your Taste Profile</h3>
        <span className="text-[11px] text-midgrey ml-auto">
          Based on {entries.reduce((sum, [, v]) => sum + Math.abs(v), 0).toFixed(0)} swipes
        </span>
      </div>

      {/* Liked keywords */}
      {liked.length > 0 && (
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-2">
            <ThumbsUp className="w-3.5 h-3.5 text-sage" />
            <span className="text-[11px] font-medium text-sage uppercase tracking-wider">
              You Like
            </span>
          </div>
          <div className="space-y-1.5">
            {liked.map(([keyword, score]) => (
              <div key={keyword} className="flex items-center gap-2">
                <span className="text-[12px] text-charcoal w-28 truncate flex-shrink-0">
                  {keyword}
                </span>
                <div className="flex-1 h-5 bg-offwhite rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-1.5 transition-all duration-500"
                    style={{
                      width: `${Math.min((score / maxScore) * 100, 100)}%`,
                      backgroundColor: '#2E5236',
                    }}
                  >
                    <span className="text-[10px] font-bold text-white">
                      +{score.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      {liked.length > 0 && disliked.length > 0 && (
        <div className="w-full h-px bg-[#E8E8E6] my-3" />
      )}

      {/* Disliked keywords */}
      {disliked.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <ThumbsDown className="w-3.5 h-3.5 text-[#C44536]" />
            <span className="text-[11px] font-medium text-[#C44536] uppercase tracking-wider">
              You Skip
            </span>
          </div>
          <div className="space-y-1.5">
            {disliked.map(([keyword, score]) => (
              <div key={keyword} className="flex items-center gap-2">
                <span className="text-[12px] text-charcoal w-28 truncate flex-shrink-0">
                  {keyword}
                </span>
                <div className="flex-1 h-5 bg-offwhite rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-start pl-1.5 transition-all duration-500"
                    style={{
                      width: `${Math.min((Math.abs(score) / Math.abs(minScore)) * 100, 100)}%`,
                      backgroundColor: '#C44536',
                      marginLeft: 'auto',
                    }}
                  >
                    <span className="text-[10px] font-bold text-white">
                      {score.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
