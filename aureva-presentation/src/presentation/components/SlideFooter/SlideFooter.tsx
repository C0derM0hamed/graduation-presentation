/**
 * SlideFooter
 *
 * Fixed bottom bar rendered inside the canvas.
 * Contains:
 *   - AUREVA wordmark (left)
 *   - Navigation dot indicators (center)
 *   - Slide counter (right)
 *
 * UPDATED: Text sizes increased ~1.5× for readability.
 * All positioning is in the 1920×1080 coordinate space.
 */

import React from 'react';

interface SlideFooterProps {
  current: number;
  total: number;
  goTo: (n: number) => void;
}

const SlideFooter: React.FC<SlideFooterProps> = ({ current, total, goTo }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        /* Slightly taller to accommodate larger text */
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 'var(--slide-pad-x)',
        paddingRight: 'var(--slide-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'rgba(250,250,248,0.92)',
        backdropFilter: 'blur(4px)',
        zIndex: 'var(--z-nav)' as any,
        pointerEvents: 'auto',
      }}
      role="navigation"
      aria-label="Slide navigation"
    >
      {/* Left: AUREVA wordmark */}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          /* 10px → 15px (~1.5×) */
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          userSelect: 'none',
        }}
      >
        AUREVA
      </span>

      {/* Center: dot indicators */}
      <div className="nav-dots" aria-label="Slide position">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`nav-dot${current === i + 1 ? ' active' : ''}`}
            onClick={() => goTo(i + 1)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={current === i + 1 ? 'true' : undefined}
            style={{ border: 'none', cursor: 'pointer', padding: 0 }}
          />
        ))}
      </div>

      {/* Right: slide counter */}
      <span
        className="slide-number"
        aria-live="polite"
        aria-atomic="true"
        style={{
          /* 10px → 15px (~1.5×) */
          fontSize: 15,
        }}
      >
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

export default SlideFooter;
