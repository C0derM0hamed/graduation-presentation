/**
 * Slide 10 — NOW, UNDER THE HOOD
 * Transition: Business → Technical
 */

import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const flow = [
  { label: 'Doctor', sub: 'The clinical user', top: true },
  { label: 'AUREVA', sub: 'The intelligence layer', accent: true },
  { label: 'AI  +  Clinical Evidence', sub: 'Prediction · Explanation · RAG' },
  { label: 'Clinical Decision Support', sub: 'The outcome', bottom: true },
];

const Slide10UnderTheHood: React.FC<SlideProps> = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#FAFAF8',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        paddingBottom: 102,
      }}
    >
      {/* ── LEFT — Section message ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '128px 102px 128px 192px',
          borderRight: '1px solid #E5E2DC',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.1 }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}
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
            Technical Section
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#1A1614',
            margin: 0,
            marginBottom: 19,
          }}
        >
          Now, Under<br />the Hood.
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.65, ease, delay: 0.45 }}
          style={{
            height: 2,
            width: 64,
            background: '#8B1A4A',
            borderRadius: 999,
            transformOrigin: 'left',
            marginBottom: 45,
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1.75,
            color: '#7A706C',
            margin: 0,
            maxWidth: 640,
          }}
        >
          We've shown what AUREVA does.<br />
          Now let's look at how we built it.
        </motion.p>

        {/* Section tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.8 }}
          style={{ display: 'flex', gap: 19, marginTop: 70, flexWrap: 'wrap' }}
        >
          {['Technology Stack', 'AI Prediction', 'RAG Pipeline', 'Clinical-Grade Security'].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '13px 29px',
                background: '#F2E6EC',
                border: '1px solid rgba(139,26,74,0.15)',
                borderRadius: 999,
                fontFamily: "'Inter', sans-serif",
                fontSize: 26,
                fontWeight: 500,
                color: '#8B1A4A',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT — Progressive reveal flow ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          padding: '128px 128px',
        }}
      >
        {flow.map((item, i) => (
          <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.3 + i * 0.18 }}
              style={{
                padding: item.accent ? '24px 52px' : '20px 42px',
                background: item.accent ? '#8B1A4A' : item.top ? '#FFFFFF' : item.bottom ? '#1A1614' : '#F5F4F0',
                border: item.accent ? 'none' : `1px solid ${item.top ? '#E5E2DC' : item.bottom ? 'transparent' : '#E5E2DC'}`,
                borderRadius: 16,
                boxShadow: item.accent ? '0 8px 32px rgba(139,26,74,0.22)' : item.top ? '0 4px 12px rgba(26,22,20,0.06)' : 'none',
                textAlign: 'center',
                minWidth: 340,
              }}
            >
              <p style={{
                fontFamily: item.accent ? "'Playfair Display', serif" : "'Inter', sans-serif",
                fontSize: item.accent ? 28 : 24,
                fontWeight: item.accent ? 700 : 600,
                color: item.accent ? '#FFFFFF' : item.bottom ? '#FAFAF8' : '#1A1614',
                margin: 0,
                marginBottom: 10,
                letterSpacing: item.accent ? '-0.01em' : '0',
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 26,
                fontWeight: 400,
                color: item.accent ? 'rgba(255,255,255,0.65)' : item.bottom ? 'rgba(250,250,248,0.5)' : '#7A706C',
                margin: 0,
              }}>
                {item.sub}
              </p>
            </motion.div>

            {/* Connector arrow */}
            {i < flow.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.4, ease, delay: 0.45 + i * 0.18 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0,
                  transformOrigin: 'top',
                  margin: '8px 0',
                }}
              >
                <div style={{ width: 1, height: 32, background: 'rgba(139,26,74,0.3)' }} />
                <svg width="14" height="10" viewBox="0 0 10 8" fill="none">
                  <path d="M5 8L0 0h10z" fill="rgba(139,26,74,0.4)" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide10UnderTheHood;
