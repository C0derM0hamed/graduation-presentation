/**
 * Slide
 *
 * Reusable slide wrapper with two composition modes:
 *
 *   <Slide>              — standard padded layout
 *   <Slide fullBleed>    — no padding (for image-heavy slides)
 *
 * Provides a consistent content area that stops above the footer.
 * Children receive the full 1920×(1080-56px) content area.
 */

import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  fullBleed?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Background override — defaults to var(--color-bg) */
  bg?: string;
}

const Slide: React.FC<SlideProps> = ({
  children,
  fullBleed = false,
  className = '',
  style,
  bg,
}) => {
  return (
    <div
      className={`slide${fullBleed ? ' slide--full-bleed' : ''} ${className}`.trim()}
      style={{
        background: bg ?? undefined,
        // Reserve space for the 64px footer bar
        paddingBottom: fullBleed ? 64 : 'calc(var(--slide-pad-y) + 64px)',
        ...style,
      }}
      role="region"
      aria-label="Slide content"
    >
      {children}
    </div>
  );
};

export default Slide;
