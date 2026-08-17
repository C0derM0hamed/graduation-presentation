/* ============================================================
   AUREVA Presentation — Core Types
   ============================================================ */

export interface SlideConfig {
  /** Unique slide index (1-based) */
  id: number;
  /** Canonical slug used for routing / aria labels */
  slug: string;
  /** Display title shown in the navigation */
  title: string;
  /** Section grouping for visual nav hierarchy */
  section: SlideSection;
  /**
   * Component to render.
   * Slides 1–9 are eagerly imported (React.FC) to avoid the Suspense
   * blank-slide flash on first navigation.
   * Slides 10+ are lazy-loaded.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<SlideProps> | React.LazyExoticComponent<React.FC<SlideProps>>;
  /** Custom transition variant override (defaults to global) */
  transition?: TransitionVariant;
}

export type SlideSection =
  | 'intro'
  | 'clinical'
  | 'business'
  | 'technical'
  | 'closing';

export interface SlideProps {
  /** Whether this slide is currently active */
  isActive: boolean;
  /** Direction of navigation: 1 = forward, -1 = backward */
  direction: NavigationDirection;
  /** 1-based slide index */
  slideIndex: number;
  /** Total number of slides */
  totalSlides: number;
}

export type NavigationDirection = 1 | -1;

export type TransitionVariant =
  | 'fade'
  | 'slide-horizontal'
  | 'slide-vertical'
  | 'scale-fade'
  | 'hero-reveal';

export interface PresentationState {
  currentSlide: number;
  direction: NavigationDirection;
  isTransitioning: boolean;
}

export interface NavigationAction {
  type: 'NEXT' | 'PREV' | 'GOTO';
  payload?: number;
}
