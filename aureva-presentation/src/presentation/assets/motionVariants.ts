/**
 * AUREVA Presentation — Framer Motion Animation Variants
 *
 * Centralized, reusable motion variants.
 * All durations and easings are aligned with CSS design tokens.
 */

import { Variants, Transition } from 'framer-motion';

/* ---- Shared Transitions ---- */

export const easeOutExpo: Transition = {
  type: 'tween',
  ease: [0.16, 1, 0.3, 1],
  duration: 0.6,
};

export const easeOutExpoFast: Transition = {
  type: 'tween',
  ease: [0.16, 1, 0.3, 1],
  duration: 0.35,
};

export const easeInOut: Transition = {
  type: 'tween',
  ease: [0.45, 0, 0.55, 1],
  duration: 0.5,
};

export const spring = {
  type: 'spring' as const,
  stiffness: 280,
  damping: 34,
  mass: 0.9,
};

/* ---- Slide Transition Variants ---- */

/**
 * Global default — subtle fade + tiny vertical shift.
 * Used for most content slides.
 */
export const slideTransitionFade: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    y: 0,
    transition: easeOutExpo,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? -24 : 24,
    transition: {
      ...easeOutExpoFast,
      duration: 0.3,
    },
  }),
};

/**
 * Horizontal slide — for section-break transitions.
 */
export const slideTransitionHorizontal: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 80 : -80,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: easeOutExpo,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -80 : 80,
    transition: { ...easeOutExpoFast, duration: 0.3 },
  }),
};

/**
 * Hero reveal — for cover/title slides. Pure opacity, slow.
 */
export const slideTransitionHero: Variants = {
  enter: {
    opacity: 0,
    scale: 0.98,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: [0.16, 1, 0.3, 1],
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.01,
    transition: {
      type: 'tween',
      ease: [0.45, 0, 0.55, 1],
      duration: 0.35,
    },
  },
};

/* ---- Content Element Variants ---- */

/** Standard fade-up reveal for headings and body text */
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutExpo,
  },
};

/** Fade-in only — for decorative elements */
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: easeOutExpo,
  },
};

/** Scale-up — for cards, images */
export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easeOutExpo,
  },
};

/** Fade from left */
export const fadeLeftVariant: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOutExpo,
  },
};

/** Fade from right */
export const fadeRightVariant: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOutExpo,
  },
};

/** Staggered container — wraps children that reveal in sequence */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

/** Stagger item — child of staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutExpo,
  },
};

/** Accent line draw — for decorative horizontal rules */
export const accentLineVariant: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      type: 'tween',
      ease: [0.16, 1, 0.3, 1],
      duration: 0.7,
      delay: 0.2,
    },
  },
};

/** Image reveal — clip-path from left */
export const imageRevealVariant: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: {
      type: 'tween',
      ease: [0.16, 1, 0.3, 1],
      duration: 0.9,
      delay: 0.1,
    },
  },
};
