/**
 * Slide 09 — Entering the Egyptian Market
 * Trust Before Scale
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem, accentLineVariant, fadeUpVariant } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const flow = [
  {
    label: '3–5 IVF Physicians',
    sub: 'Selected for clinical credibility and access',
    type: 'start',
  },
  { label: 'Clinical Pilot', sub: 'Structured usage over real patient cycles', type: 'step' },
  {
    label: 'Measure Usage & Feedback',
    sub: 'Repeat usage, satisfaction, and workflow fit',
    type: 'step',
  },
  {
    label: 'Founding Clinics',
    sub: 'Physicians who see value become clinic advocates',
    type: 'step',
  },
  {
    label: 'Paid Adoption & Scale',
    sub: 'Clinic subscriptions and broader market entry',
    type: 'end',
  },
];

const measurements = [
  'Repeat clinical usage',
  'Physician feedback',
  'Workflow fit',
  'Willingness to continue',
];

const Slide09EgyptianMarket: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: 46 }}
      >
        <motion.div variants={staggerItem} style={{ marginBottom: 17 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
              08 · Entering the Egyptian Market
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
            marginBottom: 10,
          }}
        >
          Trust Before Scale
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

      {/* Main layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: 59,
          alignItems: 'start',
        }}
      >
        {/* LEFT — Horizontal flow */}
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 33,
            }}
          >
            Market Entry Sequence
          </p>

          {/* Horizontal flow cards */}
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: 0,
              overflowX: 'visible',
            }}
          >
            {flow.map((step, i) => (
              <React.Fragment key={step.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.15 + i * 0.1 }}
                  style={{
                    flex: 1,
                    padding: '25px 21px',
                    background:
                      step.type === 'start'
                        ? '#8B1A4A'
                        : step.type === 'end'
                        ? '#1A1614'
                        : '#FFFFFF',
                    border: `1px solid ${
                      step.type === 'start' || step.type === 'end'
                        ? 'transparent'
                        : '#E5E2DC'
                    }`,
                    borderRadius:
                      i === 0
                        ? '16px 0 0 16px'
                        : i === flow.length - 1
                        ? '0 16px 16px 0'
                        : 0,
                    borderLeft: i > 0 ? 'none' : undefined,
                    boxShadow:
                      step.type === 'start' || step.type === 'end'
                        ? '0 4px 16px rgba(26,22,20,0.12)'
                        : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    minWidth: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 24,
                      fontWeight: 700,
                      color:
                        step.type === 'start' || step.type === 'end'
                          ? '#FFFFFF'
                          : '#1A1614',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {step.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 22,
                      fontWeight: 400,
                      color:
                        step.type === 'start' || step.type === 'end'
                          ? 'rgba(255,255,255,0.65)'
                          : '#7A706C',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {step.sub}
                  </p>
                </motion.div>

                {/* Arrow connector */}
                {i < flow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.35, ease, delay: 0.25 + i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 4px',
                      background: '#F5F4F0',
                      borderTop: '1px solid #E5E2DC',
                      borderBottom: '1px solid #E5E2DC',
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="#8B1A4A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT — Measurement */}
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 33,
            }}
          >
            What We Measure
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 17 }}>
            {measurements.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.35 + i * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 17,
                  padding: '19px 25px',
                  background: '#FFFFFF',
                  borderRadius: 12,
                  border: '1px solid #E5E2DC',
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#8B1A4A',
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 29,
                    fontWeight: 500,
                    color: '#1A1614',
                  }}
                >
                  {m}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.75 } as any}
            style={{
              marginTop: 29,
              padding: '19px 23px',
              background: '#F2E6EC',
              borderRadius: 12,
              border: '1px solid rgba(139,26,74,0.15)',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 26,
                fontWeight: 400,
                color: '#4A4340',
                margin: 0,
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}
            >
              We do not scale before trust is established. Physician
              satisfaction drives clinic adoption — not the reverse.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide09EgyptianMarket;
