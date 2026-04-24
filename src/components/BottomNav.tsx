import { Layers, Bookmark } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function BottomNav() {
  const { currentView, setCurrentView } = useStore();
  const savedCount = useStore((state) => state.savedIds.length);

  const tabs: { id: 'discover' | 'saved'; label: string; icon: typeof Layers }[] = [
    { id: 'discover', label: 'Discover', icon: Layers },
    { id: 'saved', label: 'Saved', icon: Bookmark },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[15] bg-white border-t border-black/[0.06]">
      <div className="mx-auto max-w-[640px] lg:max-w-[320px] lg:rounded-3xl lg:mb-4 lg:border lg:border-black/[0.06] lg:shadow-lg flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id)}
              className="flex flex-col items-center justify-center gap-0.5 relative w-20 h-full"
            >
              <div className="relative">
                <Icon
                  className="w-6 h-6 transition-colors"
                  strokeWidth={isActive ? 2.5 : 1.5}
                  style={{ color: isActive ? '#1A1A18' : '#888888' }}
                />
                {tab.id === 'saved' && savedCount > 0 && (
                  <span
                    className="absolute -top-2 -right-3 min-w-[18px] h-[18px] rounded-full bg-sage text-white text-[11px] font-bold flex items-center justify-center px-1"
                    style={{ animation: 'badgeSpring 0.4s ease-out' }}
                  >
                    {savedCount}
                  </span>
                )}
              </div>
              <span
                className="text-[11px] font-medium tracking-[0.04em] transition-colors"
                style={{ color: isActive ? '#1A1A18' : '#888888' }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
