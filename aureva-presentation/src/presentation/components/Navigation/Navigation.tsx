/**
 * Navigation
 *
 * Floating prev/next arrow controls rendered OUTSIDE the
 * scaled canvas so they are always full-size regardless of zoom.
 *
 * UPDATED: Buttons are ~1.5× larger for better visibility and click area.
 * Buttons: 44px → 66px. Icons: 16px → 24px.
 */

import React, { useState } from 'react';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  currentSlide: number;
  totalSlides: number;
}

const NavButton: React.FC<{
  onClick: () => void;
  disabled: boolean;
  label: string;
  side: 'left' | 'right';
}> = ({ onClick, disabled, label, side }) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        position: 'fixed',
        top: '50%',
        [side]: 16,
        transform: 'translateY(-50%)',
        zIndex: 200,
        background: hovered && !disabled
          ? 'rgba(139,26,74,0.14)'
          : 'rgba(255,255,255,0.08)',
        border: `1.5px solid ${focused ? '#8B1A4A' : 'rgba(139,26,74,0.25)'}`,
        borderRadius: '50%',
        /* 1.5× increase: 44 → 66px */
        width: 66,
        height: 66,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.18 : hovered || focused ? 1 : 0.5,
        transition: 'all 280ms cubic-bezier(0.16,1,0.3,1)',
        backdropFilter: 'blur(10px)',
        outline: focused ? '2px solid #8B1A4A' : 'none',
        outlineOffset: 2,
        /* Larger click area */
        padding: 0,
      }}
    >
      <svg
        /* 1.5× increase: 16 → 24px */
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        stroke={disabled ? '#7A706C' : '#8B1A4A'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: side === 'left' ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
      >
        <polyline points="5,3 11,8 5,13" />
      </svg>
    </button>
  );
};

const Navigation: React.FC<NavigationProps> = ({
  onPrev,
  onNext,
  isFirst,
  isLast,
}) => {
  return (
    <>
      <NavButton
        onClick={onPrev}
        disabled={isFirst}
        label="Previous slide"
        side="left"
      />
      <NavButton
        onClick={onNext}
        disabled={isLast}
        label="Next slide"
        side="right"
      />
    </>
  );
};

export default Navigation;
