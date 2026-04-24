import { useState, useRef, useEffect } from 'react';
import { Search, X, Sparkles, ArrowRight, Plus } from 'lucide-react';

const SUGGESTED_KEYWORDS = [
  'CRISPR', 'Cancer', 'Neuroscience', 'Machine Learning',
  'Immunology', 'Genomics', 'Stem Cells', 'Microbiome',
  'Alzheimer', 'Protein Structure', 'Gene Therapy',
  'Epigenetics', 'Virology', 'Pharmacology', 'Cardiology',
  'Diabetes', 'Bioinformatics', 'Nanomedicine', 'Aging',
  'RNA Sequencing', 'Synthetic Biology', 'Vaccine',
  'Oxidative Stress', 'Metabolism', 'Inflammation',
  'Antibiotic Resistance', 'Tissue Engineering',
  'Cryo-electron Microscopy', 'Single Cell', 'Proteomics',
];

interface KeywordOnboardingProps {
  onComplete: (keywords: string[]) => void;
}

export function KeywordOnboarding({ onComplete }: KeywordOnboardingProps) {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Animate in
    requestAnimationFrame(() => setIsAnimating(true));
  }, []);

  const addKeyword = (keyword: string) => {
    const trimmed = keyword.trim();
    if (!trimmed) return;
    const normalized = trimmed.toLowerCase();
    if (!selectedKeywords.some((k) => k.toLowerCase() === normalized)) {
      setSelectedKeywords((prev) => [...prev, trimmed]);
    }
    setInputValue('');
  };

  const removeKeyword = (keyword: string) => {
    setSelectedKeywords((prev) => prev.filter((k) => k !== keyword));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      addKeyword(inputValue);
    }
  };

  const handleSubmit = () => {
    onComplete(selectedKeywords.length > 0 ? selectedKeywords : ['research']);
  };

  const filteredSuggestions = SUGGESTED_KEYWORDS.filter(
    (kw) =>
      !selectedKeywords.some((s) => s.toLowerCase() === kw.toLowerCase()) &&
      (inputValue === '' || kw.toLowerCase().includes(inputValue.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #1a2e1d 0%, #0f1a11 40%, #1a1a18 100%)',
          opacity: isAnimating ? 1 : 0,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              background: `radial-gradient(circle, rgba(46,82,54,${0.08 + i * 0.02}) 0%, transparent 70%)`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${6 + i * 2}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-[480px] mx-4 transition-all duration-700"
        style={{
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #2E5236, #4a7c54)',
              boxShadow: '0 8px 32px rgba(46, 82, 54, 0.3)',
            }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-[28px] font-bold text-white tracking-[-0.02em] mb-2">
            What interests you?
          </h1>
          <p className="text-[15px] text-white/60 leading-relaxed max-w-[360px] mx-auto">
            Choose topics or type your own keywords to personalize your paper feed.
          </p>
        </div>

        {/* Card container */}
        <div
          className="rounded-[20px] overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Search input */}
          <div className="p-4 pb-3">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3.5 h-11 border border-white/10 focus-within:border-white/25 transition-colors">
              <Search className="w-4 h-4 text-white/40 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a keyword and press Enter..."
                className="flex-1 text-[14px] bg-transparent outline-none text-white placeholder:text-white/30"
              />
              {inputValue && (
                <button
                  onClick={() => addKeyword(inputValue)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-sage/40 text-white/80 text-[11px] font-medium hover:bg-sage/60 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              )}
            </div>
          </div>

          {/* Selected keywords */}
          {selectedKeywords.length > 0 && (
            <div className="px-4 pb-3">
              <div className="flex flex-wrap gap-1.5">
                {selectedKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[12px] font-semibold cursor-pointer transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #2E5236, #3d6b47)',
                      color: '#fff',
                      boxShadow: '0 2px 8px rgba(46, 82, 54, 0.3)',
                    }}
                    onClick={() => removeKeyword(kw)}
                  >
                    {kw}
                    <X className="w-3 h-3 text-white/60" />
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="mx-4 h-px bg-white/10" />

          {/* Suggested keywords */}
          <div className="p-4 pt-3">
            <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.08em] mb-2.5 block">
              Suggested Topics
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-[200px] overflow-y-auto scrollbar-hide">
              {filteredSuggestions.map((kw) => (
                <button
                  key={kw}
                  onClick={() => addKeyword(kw)}
                  className="px-2.5 py-1 rounded-lg text-[12px] font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-4 h-[52px] rounded-2xl flex items-center justify-center gap-2 text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: selectedKeywords.length > 0
              ? 'linear-gradient(135deg, #2E5236, #4a7c54)'
              : 'rgba(255, 255, 255, 0.1)',
            color: selectedKeywords.length > 0 ? '#fff' : 'rgba(255, 255, 255, 0.5)',
            boxShadow: selectedKeywords.length > 0
              ? '0 8px 32px rgba(46, 82, 54, 0.4)'
              : 'none',
          }}
        >
          {selectedKeywords.length > 0
            ? `Start Discovering (${selectedKeywords.length} topic${selectedKeywords.length !== 1 ? 's' : ''})`
            : 'Skip for now'}
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Hint */}
        <p className="text-center text-[12px] text-white/30 mt-3">
          You can always search for new topics later
        </p>
      </div>

      {/* Float animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-20px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
