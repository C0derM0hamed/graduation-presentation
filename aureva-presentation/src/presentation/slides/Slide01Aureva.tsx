/**
 * Slide 01 — AUREVA
 * Hero cover slide.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const Slide01Aureva: React.FC<SlideProps> = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#FAFAF8',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT PANEL ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 72px 80px 120px',
          position: 'relative',
        }}
      >
        {/* Top section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 48,
          }}
        >
          <div style={{ width: 32, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B1A4A',
          }}>
            Final Defense · 2025
          </span>
        </motion.div>

        {/* AUREVA Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: '#1A1614',
            margin: 0,
            marginBottom: 8,
          }}
        >
          AUREVA
        </motion.h1>

        {/* Accent line under wordmark */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
          style={{
            height: 3,
            width: 80,
            background: '#8B1A4A',
            borderRadius: 999,
            transformOrigin: 'left',
            marginBottom: 28,
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#4A4340',
            margin: 0,
            marginBottom: 36,
          }}
        >
          Clinical Decision Support<br />for IVF Specialists
        </motion.p>

        {/* Supporting message */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#7A706C',
            margin: 0,
            maxWidth: 440,
            marginBottom: 56,
          }}
        >
          AUREVA helps IVF physicians turn complex, scattered patient
          information into one clearer clinical picture before treatment begins.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.75 }}
          style={{
            width: '100%',
            height: 1,
            background: '#E5E2DC',
            marginBottom: 28,
          }}
        />

        {/* Clinical partnership */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.85 }}
        >
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#8B1A4A',
            margin: 0,
            marginBottom: 6,
          }}>
            Clinical Partnership
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: '#1A1614',
            margin: 0,
            marginBottom: 2,
          }}>
            Dr. Mahmoud Abdelaleem
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 400,
            color: '#7A706C',
            margin: 0,
          }}>
            Senior IVF Consultant
          </p>
        </motion.div>

        {/* ITI / Graduation badge — bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 1.05 }}
          style={{
            position: 'absolute',
            bottom: 80,
            left: 120,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{
            padding: '6px 14px',
            background: '#F2E6EC',
            borderRadius: 999,
            border: '1px solid rgba(139,26,74,0.18)',
          }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
            }}>
              ITI · AI Pro Track
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL — decorative geometric field ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#F5F4F0',
        }}
      >
        {/* Large background circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          style={{
            position: 'absolute',
            right: -160,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 820,
            height: 820,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 40%, #F2E6EC 0%, #EDEBE6 55%, #E5E2DC 100%)',
          }}
        />

        {/* Inner accent ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.45 }}
          style={{
            position: 'absolute',
            right: -60,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 600,
            height: 600,
            borderRadius: '50%',
            border: '1.5px solid rgba(139,26,74,0.15)',
          }}
        />

        {/* Smaller accent ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease, delay: 0.6 }}
          style={{
            position: 'absolute',
            right: 60,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 380,
            height: 380,
            borderRadius: '50%',
            border: '1px solid rgba(139,26,74,0.10)',
          }}
        />

        {/* Central minimal mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.8 }}
          style={{
            position: 'absolute',
            right: 200,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {/* A-mark — three clean rectangles */}
          <div style={{ position: 'relative', width: 64, height: 64 }}>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 8,
              height: 48,
              background: '#8B1A4A',
              borderRadius: 4,
              transform: 'rotate(-12deg)',
              transformOrigin: 'bottom center',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 8,
              height: 48,
              background: '#8B1A4A',
              borderRadius: 4,
              transform: 'rotate(12deg)',
              transformOrigin: 'bottom center',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 18,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 24,
              height: 6,
              background: '#C96090',
              borderRadius: 3,
            }} />
          </div>

          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#1A1614',
          }}>
            AUREVA
          </span>
          <div style={{ width: 32, height: 1.5, background: '#8B1A4A', borderRadius: 999 }} />
        </motion.div>

        {/* Vertical text accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 0.6, ease, delay: 1.0 }}
          style={{
            position: 'absolute',
            left: 40,
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'center center',
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B1A4A',
            whiteSpace: 'nowrap',
          }}
        >
          AI · IVF · Clinical Intelligence
        </motion.div>
      </div>

      {/* Vertical dividing line between panels */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.3 }}
        style={{
          position: 'absolute',
          left: '50%',
          top: 80,
          bottom: 80,
          width: 1,
          background: '#E5E2DC',
          transformOrigin: 'top',
        }}
      />
    </div>
  );
};

export default Slide01Aureva;
