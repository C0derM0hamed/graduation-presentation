/**
 * Slide 16 — FROM INTERFACE TO INTELLIGENCE
 * Full application architecture: Frontend → API → Backend → Services → DB + ML + RAG
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const TechPill: React.FC<{ label: string; delay: number }> = ({ label, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.35, ease, delay }}
    style={{
      padding: '7px 14px',
      background: '#F2E6EC',
      border: '1px solid rgba(139,26,74,0.18)',
      borderRadius: 999,
      fontFamily: "'Inter', sans-serif",
      fontSize: 22,
      fontWeight: 600,
      color: '#8B1A4A',
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </motion.span>
);

const LayerBox: React.FC<{
  label: string;
  sub?: string;
  pills?: string[];
  pillsDelay?: number;
  accent?: boolean;
  dark?: boolean;
  delay: number;
  wide?: boolean;
}> = ({ label, sub, pills, pillsDelay = 0, accent, dark, delay, wide }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease, delay }}
    style={{
      padding: '21px 29px',
      background: dark ? '#1A1614' : accent ? '#8B1A4A' : '#FFFFFF',
      border: dark || accent ? 'none' : '1px solid #E5E2DC',
      borderRadius: 16,
      boxShadow: dark || accent ? '0 8px 24px rgba(26,22,20,0.14)' : '0 4px 12px rgba(26,22,20,0.05)',
      ...(wide ? { width: '100%' } : {}),
    }}
  >
    <p style={{
      fontFamily: accent || dark ? "'Playfair Display', serif" : "'Inter', sans-serif",
      fontSize: accent ? 22 : 20,
      fontWeight: 600,
      color: accent || dark ? '#FFFFFF' : '#1A1614',
      margin: 0,
      marginBottom: sub || (pills && pills.length) ? 6 : 0,
    }}>
      {label}
    </p>
    {sub && (
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 24,
        color: accent || dark ? 'rgba(255,255,255,0.65)' : '#7A706C',
        margin: 0,
        marginBottom: (pills && pills.length) ? 10 : 0,
      }}>
        {sub}
      </p>
    )}
    {pills && pills.length > 0 && (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 8 }}>
        {pills.map((p, i) => <TechPill key={p} label={p} delay={pillsDelay + i * 0.06} />)}
      </div>
    )}
  </motion.div>
);

const Arrow: React.FC<{ delay: number; height?: number }> = ({ delay, height = 36 }) => (
  <motion.div
    initial={{ opacity: 0, scaleY: 0 }}
    animate={{ opacity: 1, scaleY: 1 }}
    transition={{ duration: 0.3, ease, delay }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: 'top', margin: '4px 0' }}
  >
    <div style={{ width: 1.5, height, background: 'rgba(139,26,74,0.3)' }} />
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ marginTop: -1 }}>
      <path d="M6 8L0 0h12z" fill="rgba(139,26,74,0.4)" />
    </svg>
  </motion.div>
);

const Slide16InterfaceIntelligence: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* ── Header ── */}
      <div style={{ marginBottom: 29 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}
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
            16 · Application Architecture
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 67,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#1A1614',
            margin: 0,
            marginBottom: 10,
          }}
        >
          From Interface to Intelligence
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          style={{ height: 2, width: 56, background: '#8B1A4A', borderRadius: 999, transformOrigin: 'left' }}
        />
      </div>

      {/* ── Architecture layout: two columns ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 50,
        alignItems: 'start',
        minHeight: 0,
      }}>

        {/* LEFT — Frontend stack */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 21,
            }}
          >
            Client Layer
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            <LayerBox
              label="Frontend Application"
              sub="Interactive clinical interface"
              pills={['React 19', 'TanStack Start', 'TypeScript', 'Zustand']}
              pillsDelay={0.42}
              delay={0.32}
              wide
            />
            <Arrow delay={0.5} />

            <LayerBox
              label="API Layer"
              sub="Authentication · Rate limiting · Routing"
              delay={0.56}
              wide
            />
            <Arrow delay={0.66} />

            {/* Optional services */}
            <div style={{ display: 'flex', gap: 14, width: '100%' }}>
              {[
                { label: 'Authentication', sub: 'JWT · Sessions' },
                { label: 'Notifications',  sub: 'Clinical alerts' },
                { label: 'Background Jobs', sub: 'Async tasks' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.72 + i * 0.08 }}
                  style={{
                    flex: 1,
                    padding: '14px 17px',
                    background: '#F5F4F0',
                    border: '1px solid #E5E2DC',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}
                >
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 24,
                    fontWeight: 600,
                    color: '#4A4340',
                    margin: 0,
                    marginBottom: 4,
                  }}>
                    {s.label}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 21,
                    color: '#7A706C',
                    margin: 0,
                  }}>
                    {s.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Backend stack */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 21,
            }}
          >
            Server Layer
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            <LayerBox
              label="FastAPI Backend"
              sub="REST endpoints · Business logic"
              pills={['FastAPI', 'Python 3.12', 'SQLAlchemy']}
              pillsDelay={0.46}
              accent
              delay={0.36}
              wide
            />
            <Arrow delay={0.56} />

            <LayerBox
              label="Service Layer"
              sub="Domain services · Orchestration"
              delay={0.62}
              wide
            />
            <Arrow delay={0.72} />

            <LayerBox
              label="Data Store"
              sub="Persistent clinical data"
              pills={['PostgreSQL 16']}
              pillsDelay={0.82}
              delay={0.76}
              wide
            />
            <Arrow delay={0.86} />

            {/* ML + RAG branches */}
            <div style={{ display: 'flex', gap: 17, width: '100%' }}>
              {[
                { label: 'ML Engine', techs: ['XGBoost', 'SHAP', 'scikit-learn'] },
                { label: 'RAG Engine', techs: ['Qdrant', 'Sentence Transformers'] },
              ].map((branch, i) => (
                <motion.div
                  key={branch.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease, delay: 0.92 + i * 0.1 }}
                  style={{
                    flex: 1,
                    padding: '21px 25px',
                    background: '#1A1614',
                    borderRadius: 14,
                    boxShadow: '0 6px 20px rgba(26,22,20,0.14)',
                  }}
                >
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 29,
                    fontWeight: 600,
                    color: '#FAFAF8',
                    margin: 0,
                    marginBottom: 12,
                  }}>
                    {branch.label}
                  </p>
                  <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                    {branch.techs.map((t, j) => (
                      <TechPill key={t} label={t} delay={1.0 + i * 0.1 + j * 0.06} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide16InterfaceIntelligence;
