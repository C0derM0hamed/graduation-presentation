/**
 * Slide 05 — The Clinical Picture
 * The Data Exists. Bringing It Together Takes Work.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem, accentLineVariant, fadeUpVariant } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const factors = [
  {
    label: 'Patient History',
    sub: 'Age, BMI, diagnosis, prior conditions',
    icon: '▣',
    delay: 0.25,
  },
  {
    label: 'Hormonal Indicators',
    sub: 'FSH, LH, E2, AMH, TSH levels',
    icon: '▣',
    delay: 0.35,
  },
  {
    label: 'Ovarian Reserve',
    sub: 'AFC, antral follicle count, ovarian volume',
    icon: '▣',
    delay: 0.45,
  },
  {
    label: 'Previous Attempts',
    sub: 'Prior IVF outcomes, protocol responses',
    icon: '▣',
    delay: 0.55,
  },
  {
    label: 'Treatment References',
    sub: 'Protocol literature and peer-reviewed guidance',
    icon: '▣',
    delay: 0.65,
  },
];

const Slide05ClinicalPicture: React.FC<SlideProps> = () => {
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
        {/* ── LEFT — Header + statement ── */}
        <div style={{ paddingRight: 80 }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
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
                  03 · The Clinical Picture
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#1A1614',
                margin: 0,
                marginBottom: 10,
                maxWidth: 500,
              }}
            >
              The Data Exists. Bringing It Together Takes Work.
            </motion.h1>

            <motion.div
              variants={accentLineVariant}
              style={{
                height: 2,
                width: 56,
                background: '#8B1A4A',
                borderRadius: 999,
                marginBottom: 24,
              }}
            />

            <motion.p
              variants={staggerItem}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#7A706C',
                margin: 0,
                maxWidth: 440,
                marginBottom: 32,
              }}
            >
              Before treatment, an IVF specialist weighs many factors at once —
              each arriving from a different source, in a different format,
              at a different time.
            </motion.p>

            {/* Central "fragmentation" visual */}
            <motion.div
              variants={fadeUpVariant}
              style={{
                position: 'relative',
                padding: '24px 28px',
                background: '#F5F4F0',
                borderRadius: 16,
                border: '1px solid #E5E2DC',
                maxWidth: 420,
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#8B1A4A',
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                The Physician's Challenge
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 17,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#1A1614',
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                "Every patient file is a puzzle — scattered across labs,
                referrals, and past records."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT — Factor cards ── */}
        <div
          style={{
            paddingLeft: 80,
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
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 24,
            }}
          >
            Factors Considered
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {factors.map((factor, i) => (
              <motion.div
                key={factor.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease, delay: factor.delay }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '16px 20px',
                  background: '#FFFFFF',
                  borderRadius: 12,
                  border: '1px solid #E5E2DC',
                  boxShadow: '0 2px 6px rgba(26,22,20,0.05)',
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: i === 0 ? '#8B1A4A' : '#F2E6EC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      color: i === 0 ? '#FFFFFF' : '#8B1A4A',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#1A1614',
                      margin: 0,
                      marginBottom: 3,
                    }}
                  >
                    {factor.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      color: '#7A706C',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {factor.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide05ClinicalPicture;
