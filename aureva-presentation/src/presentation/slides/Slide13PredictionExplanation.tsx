/**
 * Slide 13 — FROM PREDICTION TO EXPLANATION
 * Big probability → SHAP → contributing factors with horizontal bars
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const factors = [
  { label: 'Low AMH Level',          direction: 'negative', weight: 0.82 },
  { label: 'AFC < 5',                 direction: 'negative', weight: 0.68 },
  { label: 'Age < 35',               direction: 'positive', weight: 0.74 },
  { label: 'Previous Successful IVF', direction: 'positive', weight: 0.61 },
  { label: 'Elevated FSH',           direction: 'negative', weight: 0.55 },
  { label: 'Optimal BMI',            direction: 'positive', weight: 0.47 },
];

const Slide13PredictionExplanation: React.FC<SlideProps> = () => {
  return (
    <Slide>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: 0,
        height: '100%',
        alignItems: 'center',
      }}>

        {/* ── LEFT — Header + Big Number + SHAP flow ── */}
        <div style={{ paddingRight: 115, borderRight: '1px solid #E5E2DC', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}
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
              13 · Explainable AI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1A1614',
              margin: 0,
              marginBottom: 16,
            }}
          >
            From Prediction<br />to Explanation
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
            style={{ height: 2, width: 56, background: '#8B1A4A', borderRadius: 999, transformOrigin: 'left', marginBottom: 45 }}
          />

          {/* Big probability number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            style={{
              padding: '38px 45px',
              background: '#1A1614',
              borderRadius: 16,
              marginBottom: 38,
              textAlign: 'center',
            }}
          >
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 128,
              fontWeight: 700,
              color: '#FAFAF8',
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}>
              72<span style={{ fontSize: 58, color: '#C96090' }}>%</span>
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 400,
              color: 'rgba(250,250,248,0.5)',
              margin: 0,
              marginTop: 13,
            }}>
              IVF Success Probability
            </p>
          </motion.div>

          {/* SHAP flow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13 }}>
            {[
              { label: 'Prediction', sub: 'Model output' },
              { label: 'SHAP Analysis', sub: 'Shapley values', accent: true },
              { label: 'Why this result?', sub: 'Interpretable factors' },
            ].map((step, i) => (
              <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease, delay: 0.55 + i * 0.14 }}
                  style={{
                    padding: '16px 32px',
                    background: step.accent ? '#8B1A4A' : '#F5F4F0',
                    border: step.accent ? 'none' : '1px solid #E5E2DC',
                    borderRadius: 10,
                    textAlign: 'center',
                    minWidth: 180,
                  }}
                >
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: step.accent ? '#FFFFFF' : '#1A1614',
                    margin: 0,
                    marginBottom: 2,
                  }}>
                    {step.label}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    color: step.accent ? 'rgba(255,255,255,0.6)' : '#7A706C',
                    margin: 0,
                  }}>
                    {step.sub}
                  </p>
                </motion.div>
                {i < 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 + i * 0.14 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2px 0' }}
                  >
                    <div style={{ width: 1, height: 14, background: 'rgba(139,26,74,0.3)' }} />
                    <svg width="6" height="5" viewBox="0 0 6 5" fill="none">
                      <path d="M3 5L0 0h6z" fill="rgba(139,26,74,0.4)" />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — SHAP Factor Bars ── */}
        <div style={{ paddingLeft: 115, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease, delay: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 13,
            }}
          >
            Key Contributing Factors
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease, delay: 0.58 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 24,
              fontWeight: 400,
              color: '#7A706C',
              marginBottom: 38,
              lineHeight: 1.6,
            }}
          >
            The model surfaces which clinical variables pushed the prediction up or down.
          </motion.p>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease, delay: 0.62 }}
            style={{ display: 'flex', gap: 32, marginBottom: 32 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: '#2D6A4F' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 21, color: '#4A4340' }}>Increases probability</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: '#8B1A4A' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 21, color: '#4A4340' }}>Decreases probability</span>
            </div>
          </motion.div>

          {/* Factor bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 19 }}>
            {factors.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease, delay: 0.7 + i * 0.09 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
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
                    fontWeight: 600,
                    color: f.direction === 'positive' ? '#2D6A4F' : '#8B1A4A',
                  }}>
                    {f.direction === 'positive' ? '▲' : '▼'} {f.direction}
                  </span>
                </div>

                {/* Bar track */}
                <div style={{
                  height: 8,
                  background: '#F5F4F0',
                  borderRadius: 999,
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${f.weight * 100}%` }}
                    transition={{ duration: 0.7, ease, delay: 0.78 + i * 0.09 }}
                    style={{
                      height: '100%',
                      background: f.direction === 'positive'
                        ? 'linear-gradient(to right, #2D6A4F, #52B788)'
                        : 'linear-gradient(to right, #8B1A4A, #C96090)',
                      borderRadius: 999,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease, delay: 1.4 }}
            style={{
              marginTop: 38,
              padding: '22px 29px',
              background: '#F2E6EC',
              borderRadius: 10,
              border: '1px solid rgba(139,26,74,0.15)',
            }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 400,
              color: '#4A4340',
              margin: 0,
              lineHeight: 1.65,
              fontStyle: 'italic',
            }}>
              The model does not only produce a number — it provides
              interpretable clinical factors the physician can act on.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide13PredictionExplanation;
