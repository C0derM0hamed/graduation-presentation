/**
 * Slide 08 — Business Model
 * Trust First. Revenue Second.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem, accentLineVariant, fadeUpVariant } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const journey = [
  {
    phase: '01',
    label: 'Clinical Pilot',
    sub: 'Deploy with 3–5 partner physicians',
    active: true,
  },
  {
    phase: '02',
    label: 'Physician Feedback',
    sub: 'Measure usage, workflow fit, and satisfaction',
    active: false,
  },
  {
    phase: '03',
    label: 'Proven Value',
    sub: 'Document clinical outcomes and case improvements',
    active: false,
  },
  {
    phase: '04',
    label: 'Paid Adoption',
    sub: 'Convert to clinic subscriptions',
    active: false,
  },
];

const revenue = [
  { model: 'Pay Per Case', desc: 'Per-cycle clinical consultation fee', icon: '○' },
  { model: 'Clinic Subscription', desc: 'Monthly or annual access for physician teams', icon: '○' },
  { model: 'Enterprise Agreement', desc: 'Custom contract for hospital networks', icon: '○' },
];

const Slide08BusinessModel: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: 40 }}
      >
        <motion.div variants={staggerItem} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
              }}
            >
              07 · Business Model
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#1A1614',
            margin: 0,
            marginBottom: 10,
          }}
        >
          Trust First. Revenue Second.
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
          gridTemplateColumns: '1.4fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}
      >
        {/* LEFT — Journey flow */}
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 32,
            }}
          >
            Go-To-Market Journey
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {journey.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.2 + i * 0.1 }}
                style={{ display: 'flex', gap: 24, position: 'relative' }}
              >
                {/* Connector */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: step.active ? '#8B1A4A' : '#F5F4F0',
                      border: `1.5px solid ${step.active ? '#8B1A4A' : '#E5E2DC'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: step.active ? '#FFFFFF' : '#7A706C',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {step.phase}
                    </span>
                  </div>
                  {i < journey.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        background: step.active
                          ? 'rgba(139,26,74,0.4)'
                          : '#E5E2DC',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingTop: 8, paddingBottom: i < journey.length - 1 ? 24 : 0 }}>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 19,
                      fontWeight: 600,
                      color: step.active ? '#1A1614' : '#4A4340',
                      margin: 0,
                      marginBottom: 6,
                    }}
                  >
                    {step.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      fontWeight: 400,
                      color: '#7A706C',
                      margin: 0,
                      lineHeight: 1.55,
                    }}
                  >
                    {step.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Revenue paths */}
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 32,
            }}
          >
            Revenue Paths
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {revenue.map((item, i) => (
              <motion.div
                key={item.model}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.1 }}
                style={{
                  padding: '24px 28px',
                  background: '#FFFFFF',
                  borderRadius: 14,
                  border: '1px solid #E5E2DC',
                  boxShadow: '0 4px 12px rgba(26,22,20,0.05)',
                  borderLeft: `4px solid ${i === 1 ? '#8B1A4A' : 'transparent'}`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#1A1614',
                    margin: 0,
                    marginBottom: 6,
                  }}
                >
                  {item.model}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: '#7A706C',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer note */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.75 } as any}
            style={{ marginTop: 28 }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: '#7A706C',
                lineHeight: 1.6,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Revenue model is validated against demonstrated clinical value —
              not introduced ahead of physician trust.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide08BusinessModel;
