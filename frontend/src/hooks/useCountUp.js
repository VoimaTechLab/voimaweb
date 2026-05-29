// src/hooks/useCountUp.js
import { useState, useEffect, useRef } from 'react';
 
export function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
 
  useEffect(() => {
    if (!start) return;
 
    const startTime = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3); // cubic ease-out
 
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
 
      setCount(Math.round(easedProgress * target));
 
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };
 
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, start]);
 
  return count;
}