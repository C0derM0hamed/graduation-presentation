/**
 * Slide 04 — The Problem
 * A Real Clinical Problem, at Real Scale in Egypt
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem, accentLineVariant, fadeUpVariant } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    value: '~15%',
    label: 'of Egyptian couples',
    sublabel: 'experience infertility',
    icon: '⊕',
  },
  {
    value: '50–80K',
    label: 'IVF / ICSI cycles',
    sublabel: 'performed annually',
    icon: '◎',
  },
  {
    value: '150+',
    label: 'specialized fertility',
    sublabel: 'centers nationwide',
    icon: '◉',
  },
  {
    value: '55–65K EGP',
    label: 'typical cost of a',
    sublabel: 'single IVF cycle',
    icon: '◇',
  },
];

const Slide04TheProblem: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* Section header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: 64 }}
      >
        <motion.div variants={staggerItem} style={{ marginBottom: 26 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
              }}
            >
              01 · The Problem
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#1A1614',
            margin: 0,
            marginBottom: 16,
            maxWidth: 1120,
          }}
        >
          A Real Clinical Problem, at Real Scale in Egypt
        </motion.h1>

        <motion.div
          variants={accentLineVariant}
          style={{
            height: 2,
            width: 56,
            background: '#8B1A4A',
            borderRadius: 999,
          }}
        />
      </motion.div>

      {/* Statistics cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
          marginBottom: 58,
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            variants={staggerItem}
            custom={i}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E2DC',
              borderRadius: 16,
              padding: '51px 45px',
              boxShadow: '0 2px 8px rgba(26,22,20,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative accent strip */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: i === 0
                  ? '#8B1A4A'
                  : 'linear-gradient(to right, #E5E2DC, transparent)',
                borderRadius: '16px 16px 0 0',
              }}
            />

            {/* Value */}
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: '#1A1614',
                margin: 0,
                marginBottom: 19,
              }}
            >
              {stat.value}
            </p>

            {/* Thin divider */}
            <div
              style={{
                width: 32,
                height: 1.5,
                background: '#8B1A4A',
                borderRadius: 999,
                marginBottom: 19,
                opacity: 0.5,
              }}
            />

            {/* Label */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 21,
                fontWeight: 500,
                color: '#4A4340',
                margin: 0,
                marginBottom: 2,
                lineHeight: 1.4,
              }}
            >
              {stat.label}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 21,
                fontWeight: 400,
                color: '#7A706C',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {stat.sublabel}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom narrative paragraph */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 } as any}
        style={{
          maxWidth: 1376,
          padding: '32px 45px',
          background: '#F5F4F0',
          borderRadius: 12,
          border: '1px solid #E5E2DC',
          borderLeft: '3px solid #8B1A4A',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 1.75,
            color: '#4A4340',
            margin: 0,
          }}
        >
          IVF in Egypt is a high-stakes clinical decision made under significant financial and
          emotional pressure. Every cycle represents a major investment for the patient —
          and a complex clinical picture for the physician to navigate without adequate decision support.
        </p>
      </motion.div>
    </Slide>
  );
};

export default Slide04TheProblem;
