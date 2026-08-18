/**
 * Slide 11 — AUREVA SYSTEM ARCHITECTURE
 * High-level architecture diagram with progressive disclosure.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide/Slide';
import { SlideProps } from '../../types';

const ease = [0.16, 1, 0.3, 1] as const;

/** Tiny tech badge */
const TechBadge: React.FC<{ label: string; delay: number }> = ({ label, delay }) => (
  <motion.span
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease, delay }}
    style={{
      padding: '7px 14px',
      background: '#F2E6EC',
      border: '1px solid rgba(139,26,74,0.18)',
      borderRadius: 999,
      fontFamily: "'Inter', sans-serif",
      fontSize: 17,
      fontWeight: 600,
      color: '#8B1A4A',
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </motion.span>
);

/** A diagram node box */
const Node: React.FC<{
  label: string;
  sub?: string;
  accent?: boolean;
  dark?: boolean;
  delay: number;
  minWidth?: number;
}> = ({ label, sub, accent, dark, delay, minWidth = 220 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease, delay }}
    style={{
      padding: accent ? '18px 32px' : '14px 28px',
      background: accent ? '#8B1A4A' : dark ? '#1A1614' : '#FFFFFF',
      border: accent || dark ? 'none' : '1px solid #E5E2DC',
      borderRadius: 14,
      boxShadow: accent ? '0 6px 24px rgba(139,26,74,0.2)' : '0 4px 12px rgba(26,22,20,0.06)',
      textAlign: 'center',
      minWidth,
    }}
  >
    <p style={{
      fontFamily: accent ? "'Playfair Display', serif" : "'Inter', sans-serif",
      fontSize: accent ? 22 : 20,
      fontWeight: accent ? 700 : 600,
      color: accent || dark ? '#FFFFFF' : '#1A1614',
      margin: 0,
      marginBottom: sub ? 4 : 0,
    }}>
      {label}
    </p>
    {sub && (
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 17,
        fontWeight: 400,
        color: accent || dark ? 'rgba(255,255,255,0.65)' : '#7A706C',
        margin: 0,
      }}>
        {sub}
      </p>
    )}
  </motion.div>
);

/** Vertical connector line + arrow */
const VArrow: React.FC<{ delay: number; height?: number }> = ({ delay, height = 40 }) => (
  <motion.div
    initial={{ opacity: 0, scaleY: 0 }}
    animate={{ opacity: 1, scaleY: 1 }}
    transition={{ duration: 0.35, ease, delay }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: 'top', margin: '4px 0' }}
  >
    <div style={{ width: 1.5, height, background: 'rgba(139,26,74,0.3)' }} />
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ marginTop: -1 }}>
      <path d="M6 8L0 0h12z" fill="rgba(139,26,74,0.4)" />
    </svg>
  </motion.div>
);

const Slide11SystemArchitecture: React.FC<SlideProps> = () => {
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
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B1A4A',
          }}>
            11 · System Architecture
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 50,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#1A1614',
            margin: 0,
            marginBottom: 10,
          }}
        >
          AUREVA System Architecture
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          style={{ height: 2, width: 56, background: '#8B1A4A', borderRadius: 999, transformOrigin: 'left' }}
        />
      </div>

      {/* ── Architecture Diagram ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, transform: 'scale(0.85)', transformOrigin: 'center center' }}>

          {/* Doctor */}
          <Node label="Doctor" sub="Clinical User" delay={0.2} />
          <VArrow delay={0.32} />

          {/* Frontend */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <Node label="Frontend" sub="Web Application" delay={0.38} />
            <div style={{ display: 'flex', gap: 7 }}>
              <TechBadge label="React" delay={0.44} />
              <TechBadge label="TanStack" delay={0.48} />
              <TechBadge label="TypeScript" delay={0.50} />
            </div>
          </div>
          <VArrow delay={0.52} />

          {/* API Gateway */}
          <Node label="API Layer" sub="Request routing · Auth" delay={0.56} />
          <VArrow delay={0.66} />

          {/* Backend */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <Node label="Backend" sub="Business logic · Services" delay={0.72} accent />
            <div style={{ display: 'flex', gap: 7 }}>
              <TechBadge label="FastAPI" delay={0.78} />
              <TechBadge label="Python" delay={0.80} />
              <TechBadge label="PostgreSQL" delay={0.82} />
            </div>
          </div>
          <VArrow delay={0.86} height={24} />

          {/* ML + RAG branches */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 50 }}>
            {/* ML branch */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.92 }}
              >
                <Node label="ML Engine" sub="Prediction · SHAP" delay={0} minWidth={200} />
              </motion.div>
              <div style={{ display: 'flex', gap: 7 }}>
                <TechBadge label="XGBoost" delay={1.0} />
                <TechBadge label="SHAP" delay={1.04} />
              </div>
            </div>

            {/* Vertical line joining both */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 19 }}>
              <div style={{ width: 96, height: 1.5, background: 'rgba(139,26,74,0.25)', marginBottom: -1 }} />
            </div>

            {/* RAG branch */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.92 }}
              >
                <Node label="RAG Pipeline" sub="Retrieval · Generation" delay={0} minWidth={200} />
              </motion.div>
              <div style={{ display: 'flex', gap: 7 }}>
                <TechBadge label="Qdrant" delay={1.0} />
                <TechBadge label="LLM" delay={1.04} />
              </div>
            </div>
          </div>

          <VArrow delay={1.1} height={24} />

          {/* Clinical Intelligence */}
          <Node label="Clinical Intelligence" sub="Prediction · Explanation · Protocol Guidance" delay={1.16} dark minWidth={440} />
        </div>
      </div>
    </Slide>
  );
};

export default Slide11SystemArchitecture;
