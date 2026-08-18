/**
 * Slide 06 — Why AUREVA
 * A Number Alone Isn't Enough
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem, accentLineVariant, fadeUpVariant } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const flowSteps = [
  {
    label: 'Patient Data',
    sub: 'History, hormones, prior attempts',
    color: '#8B1A4A',
    textColor: '#FFFFFF',
  },
  {
    label: 'Prediction',
    sub: 'ML-powered outcome estimate',
    color: '#A8215A',
    textColor: '#FFFFFF',
  },
  {
    label: 'Explanation',
    sub: 'Key drivers behind the result',
    color: '#F2E6EC',
    textColor: '#1A1614',
  },
  {
    label: 'Protocol Guidance',
    sub: 'Retrieved from curated IVF literature',
    color: '#FAFAF8',
    textColor: '#1A1614',
  },
];

const Slide06WhyAureva: React.FC<SlideProps> = () => {
  return (
    <Slide>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          height: '100%',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT — Header + bottom statement ── */}
        <div style={{ paddingRight: 96 }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={staggerItem} style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
                  05 · Why AUREVA
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
                marginBottom: 12,
                maxWidth: 736,
              }}
            >
              A Number Alone Isn't Enough
            </motion.h1>

            <motion.div
              variants={accentLineVariant}
              style={{
                height: 2,
                width: 56,
                background: '#8B1A4A',
                borderRadius: 999,
                marginBottom: 29,
              }}
            />

            <motion.p
              variants={staggerItem}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 26,
                fontWeight: 400,
                lineHeight: 1.75,
                color: '#7A706C',
                margin: 0,
                maxWidth: 704,
                marginBottom: 48,
              }}
            >
              AUREVA is built around the full case-review workflow —
              not a single output. A prediction is only meaningful when
              the physician understands why.
            </motion.p>

            {/* Closing statement card */}
            <motion.div
              variants={fadeUpVariant}
              style={{
                padding: '24px 29px',
                background: '#1A1614',
                borderRadius: 14,
                maxWidth: 672,
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 27,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#FAFAF8',
                  margin: 0,
                  lineHeight: 1.55,
                  marginBottom: 12,
                }}
              >
                Not just a percentage. A clearer view of the case.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 19,
                  fontWeight: 400,
                  color: 'rgba(250,250,248,0.55)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Protocol guidance is retrieved from a curated library of IVF
                reference literature — not generated freely.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT — Flow diagram ── */}
        <div
          style={{
            paddingLeft: 96,
            borderLeft: '1px solid #E5E2DC',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 34,
            }}
          >
            AUREVA Workflow
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {flowSteps.map((step, i) => (
              <div key={step.label} style={{ position: 'relative' }}>
                <motion.div
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.25 + i * 0.12 }}
                  style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: 20,
                    marginBottom: i < flowSteps.length - 1 ? 0 : 0,
                  }}
                >
                  {/* Connector column */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: 20,
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: step.color === '#FAFAF8' || step.color === '#F2E6EC'
                          ? '#8B1A4A'
                          : step.color,
                        border: '2px solid white',
                        boxShadow: '0 0 0 1.5px rgba(139,26,74,0.3)',
                        marginTop: 20,
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    />
                    {i < flowSteps.length - 1 && (
                      <div
                        style={{
                          width: 1,
                          flex: 1,
                          minHeight: 20,
                          background:
                            'linear-gradient(to bottom, rgba(139,26,74,0.4), rgba(139,26,74,0.1))',
                          marginBottom: 0,
                        }}
                      />
                    )}
                  </div>

                  {/* Step card */}
                  <div
                    style={{
                      flex: 1,
                      padding: '17px 22px',
                      background: step.color,
                      borderRadius: 12,
                      border: `1px solid ${
                        step.color === '#FAFAF8'
                          ? '#E5E2DC'
                          : step.color === '#F2E6EC'
                          ? 'rgba(139,26,74,0.2)'
                          : 'transparent'
                      }`,
                      marginBottom: i < flowSteps.length - 1 ? 8 : 0,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 24,
                        fontWeight: 600,
                        color: step.textColor,
                        margin: 0,
                        marginBottom: 4,
                      }}
                    >
                      {step.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 19,
                        fontWeight: 400,
                        color:
                          step.textColor === '#FFFFFF'
                            ? 'rgba(255,255,255,0.7)'
                            : '#7A706C',
                        margin: 0,
                      }}
                    >
                      {step.sub}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide06WhyAureva;
