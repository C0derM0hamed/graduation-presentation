/**
 * PresentationShell
 *
 * Root wrapper for the entire presentation.
 * Manages the fixed viewport, scaled canvas, and
 * renders the active slide via AnimatePresence.
 *
 * KEY FIX (blank-slide bug):
 * Slides 1–9 are imported eagerly (not lazy) in slides.ts so there is
 * no Suspense/chunk-loading delay that caused the white-flash on first visit.
 * The SlideComponent is rendered directly (no Suspense needed for eager slides).
 *
 * Slide transitions are driven by the global motion variants
 * but allow per-slide overrides from the slide registry.
 */

import React, { useRef } from 'react';
import { AnimatePresence as _AnimatePresence, motion } from 'framer-motion';

// framer-motion v4 AnimatePresenceProps doesn't declare children in React 18 strict mode
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatePresence = _AnimatePresence as any;

import { usePresentation } from '../../hooks/usePresentation';
import { useCanvasScale } from '../../hooks/useCanvasScale';
import slides from '../../data/slides';
import Navigation from '../Navigation/Navigation';
import SlideFooter from '../SlideFooter/SlideFooter';

import {
  slideTransitionFade,
  slideTransitionHorizontal,
  slideTransitionHero,
} from '../../assets/motionVariants';

import { TransitionVariant, SlideProps } from '../../types';

function resolveVariant(variant: TransitionVariant | undefined) {
  switch (variant) {
    case 'hero-reveal':        return slideTransitionHero;
    case 'slide-horizontal':   return slideTransitionHorizontal;
    case 'slide-vertical':
    case 'scale-fade':
    case 'fade':
    default:                   return slideTransitionFade;
  }
}

const PresentationShell: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useCanvasScale(containerRef as React.RefObject<HTMLElement>);

  const {
    currentSlide,
    direction,
    totalSlides,
    goNext,
    goPrev,
    goTo,
    isFirst,
    isLast,
  } = usePresentation();

  const slideConfig = slides[currentSlide - 1];
  const SlideComponent = slideConfig.component;
  const variants = resolveVariant(slideConfig.transition);

  const slideProps: SlideProps = {
    isActive: true,
    direction,
    slideIndex: currentSlide,
    totalSlides,
  };

  return (
    /* Viewport — fills entire browser window */
    <div
      ref={containerRef}
      className="presentation-viewport"
      aria-label="AUREVA Presentation"
    >
      {/* Scaled canvas — 1920×1080 coordinate space */}
      <div
        className="presentation-canvas"
        style={{ '--canvas-scale': scale } as React.CSSProperties}
      >
        {/*
          Using slide slug as key for stable identity.
          The wrap div ensures the slide always has opacity:1 as base style
          so a stalled animation never leaves the slide invisible.
        */}
        <AnimatePresence custom={direction}>
          <motion.div
            key={slideConfig.slug}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              /* Safety: ensure the slide is always visible in its resting state */
              willChange: 'opacity, transform',
            }}
          >
            <SlideComponent {...slideProps} />
          </motion.div>
        </AnimatePresence>

        {/* Footer — always visible, layered above slides */}
        <SlideFooter
          current={currentSlide}
          total={totalSlides}
          goTo={goTo}
        />
      </div>

      {/* Navigation controls — outside the canvas scale */}
      <Navigation
        onPrev={goPrev}
        onNext={goNext}
        isFirst={isFirst}
        isLast={isLast}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </div>
  );
};

export default PresentationShell;
