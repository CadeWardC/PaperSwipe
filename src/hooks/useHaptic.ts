import { useCallback } from 'react';

export function useHaptic() {
  const trigger = useCallback((intensity: 'light' | 'medium' = 'light') => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      const duration = intensity === 'light' ? 10 : 20;
      navigator.vibrate(duration);
    }
  }, []);

  return trigger;
}
