/**
 * AUREVA Presentation — usePresentation Hook
 *
 * Central state manager for slide navigation.
 * Handles keyboard events, boundary clamping,
 * and direction tracking for transitions.
 */

import { useState, useEffect, useCallback, useReducer } from 'react';
import { NavigationDirection, PresentationState, NavigationAction } from '../types';

const TOTAL_SLIDES = 19;

function presentationReducer(
  state: PresentationState,
  action: NavigationAction
): PresentationState {
  switch (action.type) {
    case 'NEXT': {
      if (state.currentSlide >= TOTAL_SLIDES) return state;
      return {
        ...state,
        currentSlide: state.currentSlide + 1,
        direction: 1,
        isTransitioning: true,
      };
    }
    case 'PREV': {
      if (state.currentSlide <= 1) return state;
      return {
        ...state,
        currentSlide: state.currentSlide - 1,
        direction: -1,
        isTransitioning: true,
      };
    }
    case 'GOTO': {
      const target = action.payload ?? state.currentSlide;
      const clamped = Math.max(1, Math.min(TOTAL_SLIDES, target));
      if (clamped === state.currentSlide) return state;
      return {
        ...state,
        currentSlide: clamped,
        direction: clamped > state.currentSlide ? 1 : -1,
        isTransitioning: true,
      };
    }
    default:
      return state;
  }
}

const initialState: PresentationState = {
  currentSlide: 1,
  direction: 1,
  isTransitioning: false,
};

export function usePresentation() {
  const [state, dispatch] = useReducer(presentationReducer, initialState);

  const goNext = useCallback(() => dispatch({ type: 'NEXT' }), []);
  const goPrev = useCallback(() => dispatch({ type: 'PREV' }), []);
  const goTo   = useCallback((n: number) => dispatch({ type: 'GOTO', payload: n }), []);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Prevent default only for presentation keys
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(1);
          break;
        case 'End':
          e.preventDefault();
          goTo(TOTAL_SLIDES);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, goTo]);

  return {
    currentSlide: state.currentSlide,
    direction: state.direction as NavigationDirection,
    totalSlides: TOTAL_SLIDES,
    goNext,
    goPrev,
    goTo,
    isFirst: state.currentSlide === 1,
    isLast: state.currentSlide === TOTAL_SLIDES,
  };
}
