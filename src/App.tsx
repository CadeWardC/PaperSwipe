import { useStore } from '@/store/useStore';
import { BottomNav } from '@/components/BottomNav';
import { Toast } from '@/components/Toast';
import { DetailSheet } from '@/components/DetailSheet';
import { SwipeView } from '@/views/SwipeView';
import { SavedView } from '@/views/SavedView';
import { KeywordOnboarding } from '@/components/KeywordOnboarding';

function App() {
  const { currentView, hasOnboarded, completeOnboarding, setPaperQueue, setCurrentIndex } = useStore();

  const handleOnboardingComplete = (keywords: string[]) => {
    completeOnboarding(keywords);
    // Clear queue to trigger fresh fetch with the user's keywords
    setPaperQueue([]);
    setCurrentIndex(0);
  };

  if (!hasOnboarded) {
    return <KeywordOnboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="h-screen w-screen bg-offwhite overflow-hidden">
      {/* Main content area */}
      <main className="h-full relative">
        {/* Discover View */}
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: currentView === 'discover' ? 1 : 0,
            pointerEvents: currentView === 'discover' ? 'auto' : 'none',
          }}
        >
          <SwipeView />
        </div>

        {/* Saved View */}
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: currentView === 'saved' ? 1 : 0,
            pointerEvents: currentView === 'saved' ? 'auto' : 'none',
          }}
        >
          <SavedView />
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Toast */}
      <Toast />

      {/* Detail Sheet Modal */}
      <DetailSheet />
    </div>
  );
}

export default App;
