import { Check } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function Toast() {
  const { toastVisible, toastMessage } = useStore();

  return (
    <div
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 h-10 rounded-xl bg-charcoal text-white text-sm font-medium transition-all duration-300 pointer-events-none"
      style={{
        opacity: toastVisible ? 1 : 0,
        transform: `translateX(-50%) translateY(${toastVisible ? 0 : '100%'})`,
      }}
    >
      <Check className="w-4 h-4" />
      {toastMessage}
    </div>
  );
}
