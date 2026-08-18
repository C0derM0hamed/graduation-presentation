/**
 * Slide 17 — SECURITY & DATA PROTECTION
 * Three visual pillars: Identity, API Security, Data Privacy.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    title: 'Identity & Access',
    icon: '⚿',
    items: [
      { label: 'JWT Authentication', sub: 'Stateless access & refresh tokens' },
      { label: 'Role Authorization', sub: 'Clinic & physician-scoped permissions' },
      { label: 'Session Revocation', sub: 'Token blacklisting & active invalidation' },
    ],
    delay: 0.3,
  },
  {
    title: 'API Security',
    icon: '⌗',
    items: [
      { label: 'Strict Validation', sub: 'Pydantic schemas & clinical range checks' },
      { label: 'Attack Prevention', sub: 'Route-specific rate limiting & cooldowns' },
      { label: 'Transport Security', sub: 'CORS, CSP, HSTS, and error masking' },
    ],
    delay: 0.45,
  },
  {
    title: 'Data Protection',
    icon: '⛨',
    items: [
      { label: 'Patient Encryption', sub: 'Fernet encryption at rest for sensitive data' },
      { label: 'Secure Storage', sub: 'Bcrypt password hashing & isolated vaults' },
      { label: 'Ownership Isolation', sub: 'Records strictly scoped to authenticated owners' },
    ],
    delay: 0.6,
  },
];

const Slide16Security: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* ── Header ── */}
      <div style={{ marginBottom: 77, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 19 }}
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
            16 · Platform Security
          </span>
          <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 77,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#1A1614',
            margin: 0,
            marginBottom: 26,
          }}
        >
          Clinical-Grade Security & Privacy
        </motion.h1>
      </div>

      {/* ── Three Pillars Layout ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 51,
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
              padding: '51px 45px',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginBottom: 51 }}>
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
                  fontSize: 32,
                  color: '#8B1A4A',
                }}>
                  {pillar.icon}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 700,
                color: '#1A1614',
                margin: 0,
                letterSpacing: '-0.01em',
              }}>
                {pillar.title}
              </h2>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 38 }}>
              {pillar.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: pillar.delay + 0.2 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 19 }}
                >
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#8B1A4A',
                    marginTop: 13,
                    flexShrink: 0,
                  }} />
                  <div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 26,
                      fontWeight: 600,
                      color: '#1A1614',
                      margin: 0,
                      marginBottom: 6,
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 22,
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

export default Slide16Security;
