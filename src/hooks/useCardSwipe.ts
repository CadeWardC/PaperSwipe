import { useRef, useCallback, useState, useEffect } from 'react';

interface SwipeState {
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  isDragging: boolean;
  showRead: boolean;
  showSkip: boolean;
}

interface UseCardSwipeOptions {
  paperId: string;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onTap: () => void;
}

const DISPLACE_THRESHOLD = 60;
const VELOCITY_THRESHOLD = 0.3;
const INDICATOR_THRESHOLD = 40;
const MAX_ROTATION = 12;

export function useCardSwipe({ paperId, onSwipeLeft, onSwipeRight, onTap }: UseCardSwipeOptions) {
  const cardRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const startTime = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);
  const isPressed = useRef(false);
  const hasSwiped = useRef(false);
  const velocityX = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  // Start fresh on every new paper
  const [swipeState, setSwipeState] = useState<SwipeState>({
    x: 0, y: 0, rotation: 0, opacity: 1,
    isDragging: false, showRead: false, showSkip: false,
  });

  // Reset everything when paper changes
  useEffect(() => {
    hasSwiped.current = false;
    isDragging.current = false;
    isPressed.current = false;
    velocityX.current = 0;
    currentX.current = 0;
    currentY.current = 0;
    setSwipeState({
      x: 0, y: 0, rotation: 0, opacity: 1,
      isDragging: false, showRead: false, showSkip: false,
    });
  }, [paperId]);

  const flyOff = useCallback((direction: 'left' | 'right') => {
    if (hasSwiped.current) return;
    hasSwiped.current = true;

    const screenWidth = window.innerWidth;
    const flyDistance = screenWidth * 1.3;
    const targetX = direction === 'right' ? flyDistance : -flyDistance;
    const targetRotation = direction === 'right' ? MAX_ROTATION : -MAX_ROTATION;
    const momentumBoost = Math.abs(velocityX.current) * 200;
    const finalX = direction === 'right'
      ? targetX + momentumBoost
      : targetX - momentumBoost;

    setSwipeState({
      x: finalX, y: currentY.current * 0.5,
      rotation: targetRotation + (velocityX.current * 2),
      opacity: 0, isDragging: false,
      showRead: direction === 'right',
      showSkip: direction === 'left',
    });

    setTimeout(() => {
      if (direction === 'right') onSwipeRight();
      else onSwipeLeft();
    }, 200);
  }, [onSwipeLeft, onSwipeRight]);

  const snapBack = useCallback(() => {
    isDragging.current = false;
    velocityX.current = 0;
    setSwipeState({
      x: 0, y: 0, rotation: 0, opacity: 1,
      isDragging: false, showRead: false, showSkip: false,
    });
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (hasSwiped.current) return;
    const card = cardRef.current;
    if (!card) return;

    card.setPointerCapture(e.pointerId);
    isPressed.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    startTime.current = performance.now();
    currentX.current = 0;
    currentY.current = 0;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    isDragging.current = false;
    velocityX.current = 0;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (hasSwiped.current) return;
    if (!isPressed.current || e.buttons === 0) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    currentX.current = dx;
    currentY.current = dy;

    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocityX.current = (e.clientX - lastX.current) / dt;
    }
    lastX.current = e.clientX;
    lastTime.current = now;

    if (!isDragging.current && Math.abs(dx) > 4) {
      isDragging.current = true;
    }

    if (isDragging.current) {
      const rotation = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, dx * 0.06));
      const opacity = Math.max(0.4, 1 - Math.abs(dx) / 400);

      setSwipeState({
        x: dx, y: dy * 0.2, rotation, opacity,
        isDragging: true,
        showRead: dx > INDICATOR_THRESHOLD,
        showSkip: dx < -INDICATOR_THRESHOLD,
      });
    }
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (hasSwiped.current) return;
    const card = cardRef.current;
    if (!card) return;
    card.releasePointerCapture(e.pointerId);
    isPressed.current = false;

    const dx = e.clientX - startX.current;
    const elapsed = performance.now() - startTime.current;

    // Tap detection
    if (Math.abs(dx) < 8 && elapsed < 250 && !isDragging.current) {
      onTap();
      return;
    }

    const avgVelocity = elapsed > 0 ? dx / elapsed : 0;
    const effectiveVelocity = Math.max(Math.abs(avgVelocity), Math.abs(velocityX.current));

    const passedDisplacement = Math.abs(dx) > DISPLACE_THRESHOLD;
    const passedVelocity = effectiveVelocity > VELOCITY_THRESHOLD;

    if (passedDisplacement || passedVelocity) {
      if (dx > 0) flyOff('right');
      else flyOff('left');
    } else {
      snapBack();
    }
  }, [onTap, flyOff, snapBack]);

  const handlePointerCancel = useCallback(() => {
    if (hasSwiped.current) return;
    isPressed.current = false;
    snapBack();
  }, [snapBack]);

  return {
    cardRef,
    swipeState,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
  };
}
