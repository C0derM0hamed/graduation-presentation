/**
 * Slide 17 — BUILT TO SCALE. DESIGNED TO EVOLVE.
 * Three visual pillars: Security, Infrastructure, Open Source direction.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    title: 'Security & Access',
    icon: '⌧',
    items: [
      { label: 'JWT Authentication', sub: 'Stateless secure sessions' },
      { label: 'Role-Based Authorization', sub: 'Clinic & physician isolation' },
      { label: 'Data Encryption', sub: 'In-transit and at-rest protection' },
    ],
    delay: 0.3,
  },
  {
    title: 'Core Infrastructure',
    icon: '⊞',
    items: [
      { label: 'Docker Containerization', sub: 'Reproducible environments' },
      { label: 'Background Processing', sub: 'Async ML & RAG tasks' },
      { label: 'PostgreSQL', sub: 'ACID-compliant clinical storage' },
    ],
    delay: 0.45,
  },
  {
    title: 'Open Architecture',
    icon: '⎈',
    items: [
      { label: 'Modular Design', sub: 'Decoupled intelligence layers' },
      { label: 'Reusable Components', sub: 'Extensible UI and API' },
      { label: 'Local AI Readiness', sub: 'Designed for on-premise execution' },
    ],
    delay: 0.6,
  },
];

const Slide17BuiltToScale: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* ── Header ── */}
      <div style={{ marginBottom: 48, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B1A4A',
          }}>
            17 · Engineering Maturity
          </span>
          <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#1A1614',
            margin: 0,
            marginBottom: 16,
          }}
        >
          Built to Scale. Designed to Evolve.
        </motion.h1>
      </div>

      {/* ── Three Pillars Layout ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
        alignItems: 'stretch',
        minHeight: 0,
      }}>
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: pillar.delay }}
            style={{
              padding: '32px 28px',
              background: '#FFFFFF',
              border: '1px solid #E5E2DC',
              borderRadius: 16,
              boxShadow: '0 4px 20px rgba(26,22,20,0.06)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #8B1A4A, #C96090)',
              opacity: 0.8,
            }} />

            {/* Icon + Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: '#F2E6EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 20,
                  color: '#8B1A4A',
                }}>
                  {pillar.icon}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: '#1A1614',
                margin: 0,
                letterSpacing: '-0.01em',
              }}>
                {pillar.title}
              </h2>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {pillar.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: pillar.delay + 0.2 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                >
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#8B1A4A',
                    marginTop: 8,
                    flexShrink: 0,
                  }} />
                  <div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#1A1614',
                      margin: 0,
                      marginBottom: 4,
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: '#7A706C',
                      margin: 0,
                      lineHeight: 1.5,
                    }}>
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};

export default Slide17BuiltToScale;
