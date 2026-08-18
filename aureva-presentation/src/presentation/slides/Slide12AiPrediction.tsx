/**
 * Slide 12 — AI-POWERED PREDICTION
 * Clinical Data → Feature Engineering → XGBoost → Probability → Risk Tier
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const features = [
  { label: 'Age',               group: 'Patient' },
  { label: 'BMI',               group: 'Patient' },
  { label: 'AMH Level',         group: 'Hormonal' },
  { label: 'FSH / LH',          group: 'Hormonal' },
  { label: 'Antral Follicle Count', group: 'Ovarian' },
  { label: 'Prior IVF Attempts', group: 'History' },
  { label: 'Protocol Type',     group: 'Treatment' },
  { label: 'Diagnosis',         group: 'Clinical' },
];

const riskTiers = [
  { label: 'High',     color: '#2D6A4F', bg: '#D8F3DC' },
  { label: 'Moderate', color: '#915C2B', bg: '#FDEBD0' },
  { label: 'Low',      color: '#8B1A4A', bg: '#F2E6EC' },
];

const Slide12AiPrediction: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* ── Header ── */}
      <div style={{ marginBottom: 33 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B1A4A',
          }}>
            12 · AI Prediction
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#1A1614',
            margin: 0,
            marginBottom: 10,
          }}
        >
          AI-Powered Prediction
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          style={{ height: 2, width: 56, background: '#8B1A4A', borderRadius: 999, transformOrigin: 'left' }}
        />
      </div>

      {/* ── Three-column pipeline ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.6fr 0.9fr',
        gap: 0,
        alignItems: 'center',
        minHeight: 0,
      }}>

        {/* COL 1 — Clinical Data + Features */}
        <div style={{
          paddingRight: 33,
          borderRight: '1px solid #E5E2DC',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease, delay: 0.25 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 17,
            }}
          >
            Clinical Input Features
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.3 + i * 0.06 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 14px',
                  background: '#FFFFFF',
                  border: '1px solid #E5E2DC',
                  borderRadius: 10,
                  boxShadow: '0 1px 4px rgba(26,22,20,0.04)',
                }}
              >
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#8B1A4A',
                  opacity: 0.5,
                  flexShrink: 0,
                }} />
                <div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 22,
                    fontWeight: 500,
                    color: '#1A1614',
                  }}>
                    {f.label}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 19,
                    fontWeight: 400,
                    color: '#7A706C',
                    marginLeft: 8,
                  }}>
                    {f.group}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COL 2 — Model core */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 25px',
          gap: 12,
        }}>
          {/* Arrow in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease, delay: 0.82 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ width: 1, height: 28, background: 'rgba(139,26,74,0.3)' }} />
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M4 6L0 0h8z" fill="rgba(139,26,74,0.4)" />
            </svg>
          </motion.div>

          {/* Feature Engineering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease, delay: 0.88 }}
            style={{
              padding: '12px 17px',
              background: '#F5F4F0',
              border: '1px solid #E5E2DC',
              borderRadius: 10,
              textAlign: 'center',
              width: '100%',
            }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 21, fontWeight: 600, color: '#4A4340', margin: 0 }}>
              Feature Engineering
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#7A706C', margin: 0, marginTop: 2 }}>
              Normalization · Encoding
            </p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease, delay: 1.0 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ width: 1, height: 20, background: 'rgba(139,26,74,0.3)' }} />
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M4 6L0 0h8z" fill="rgba(139,26,74,0.4)" />
            </svg>
          </motion.div>

          {/* XGBoost model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease, delay: 1.06 }}
            style={{
              padding: '19px 21px',
              background: '#8B1A4A',
              borderRadius: 14,
              textAlign: 'center',
              boxShadow: '0 6px 24px rgba(139,26,74,0.25)',
              width: '100%',
            }}
          >
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 29,
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
              marginBottom: 4,
            }}>
              XGBoost
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
              margin: 0,
            }}>
              Gradient Boosting Model
            </p>
          </motion.div>

          {/* Arrow out */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease, delay: 1.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ width: 1, height: 20, background: 'rgba(139,26,74,0.3)' }} />
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M4 6L0 0h8z" fill="rgba(139,26,74,0.4)" />
            </svg>
          </motion.div>
        </div>

        {/* COL 3 — Output */}
        <div style={{
          paddingLeft: 33,
          borderLeft: '1px solid #E5E2DC',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 21,
        }}>
          {/* Probability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 1.26 }}
            style={{
              padding: '21px 25px',
              background: '#FFFFFF',
              border: '1px solid #E5E2DC',
              borderRadius: 14,
              boxShadow: '0 2px 10px rgba(26,22,20,0.06)',
              textAlign: 'center',
            }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#7A706C',
              margin: 0,
              marginBottom: 8,
            }}>
              Predicted Probability
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 90,
              fontWeight: 700,
              color: '#1A1614',
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}>
              72<span style={{ fontSize: 45, color: '#8B1A4A' }}>%</span>
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 400,
              color: '#7A706C',
              margin: 0,
              marginTop: 7,
            }}>
              IVF Cycle Success Likelihood
            </p>
          </motion.div>

          {/* Risk Tier */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 1.4 }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#7A706C',
              marginBottom: 10,
            }}>
              Risk Tier Classification
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {riskTiers.map((tier, i) => (
                <motion.div
                  key={tier.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: 1.46 + i * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 14px',
                    background: i === 0 ? tier.bg : '#FAFAF8',
                    border: `1px solid ${i === 0 ? 'rgba(45,106,79,0.25)' : '#E5E2DC'}`,
                    borderRadius: 10,
                    opacity: i === 0 ? 1 : 0.6,
                  }}
                >
                  <div style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: tier.color,
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 22,
                    fontWeight: i === 0 ? 600 : 500,
                    color: i === 0 ? tier.color : '#7A706C',
                  }}>
                    {tier.label} Probability
                  </span>
                  {i === 0 && (
                    <span style={{
                      marginLeft: 'auto',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 19,
                      fontWeight: 600,
                      color: tier.color,
                    }}>
                      Active
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide12AiPrediction;
