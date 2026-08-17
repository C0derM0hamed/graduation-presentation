/**
 * AUREVA Presentation — useCanvasScale Hook
 *
 * Computes the CSS transform scale needed to fit
 * the 1920×1080 slide canvas into the current viewport
 * while maintaining exact 16:9 aspect ratio.
 *
 * Updates on window resize using ResizeObserver.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

const CANVAS_WIDTH  = 1920;
const CANVAS_HEIGHT = 1080;

export function useCanvasScale(containerRef: React.RefObject<HTMLElement>) {
  const [scale, setScale] = useState(1);

  const compute = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const { clientWidth: vw, clientHeight: vh } = el;
    const scaleX = vw / CANVAS_WIDTH;
    const scaleY = vh / CANVAS_HEIGHT;
    setScale(Math.min(scaleX, scaleY));
  }, [containerRef]);

  useEffect(() => {
    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [compute, containerRef]);

  return scale;
}
