/**
 * SlideHeader
 *
 * Reusable top section for content slides.
 * Renders:
 *   - An optional eyebrow label (section tag)
 *   - A slide title (serif)
 *   - An optional subtitle / lead paragraph
 *   - The decorative accent rule below the title
 *
 * Animates in via stagger using Framer Motion.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, accentLineVariant } from '../../assets/motionVariants';

interface SlideHeaderProps {
  /** Small uppercase label shown above the title */
  eyebrow?: string;
  /** Main slide title — rendered in serif */
  title: string;
  /** Optional subtitle or lead sentence */
  subtitle?: string;
  /** Whether to show the accent rule below the title */
  showRule?: boolean;
  /** Alignment — defaults to left */
  align?: 'left' | 'center';
  /** Additional class name */
  className?: string;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  showRule = true,
  align = 'left',
  className = '',
}) => {
  const textAlign = align === 'center' ? 'center' : 'left';

  return (
    <motion.header
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      style={{ textAlign, marginBottom: 'var(--space-8)' }}
    >
      {eyebrow && (
        <motion.div variants={staggerItem} style={{ marginBottom: 'var(--space-3)' }}>
          <span className="t-eyebrow">{eyebrow}</span>
        </motion.div>
      )}

      <motion.h1
        variants={staggerItem}
        className="t-display"
        style={{ fontSize: 'var(--text-2xl)', marginBottom: showRule ? 'var(--space-4)' : 0 }}
      >
        {title}
      </motion.h1>

      {showRule && (
        <motion.div
          variants={accentLineVariant}
          style={{
            height: 2,
            background: 'var(--color-accent)',
            borderRadius: 999,
            width: align === 'center' ? '40%' : 56,
            margin: align === 'center' ? '0 auto var(--space-4)' : '0 0 var(--space-4)',
            transformOrigin: align === 'center' ? 'center' : 'left',
          }}
        />
      )}

      {subtitle && (
        <motion.p
          variants={staggerItem}
          className="t-body"
          style={{ fontSize: 'var(--text-md)', maxWidth: 700 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
};

export default SlideHeader;
