/**
 * Slide 18 — LIVE DEMONSTRATION
 * Bridge to live application demo.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const Slide18LiveDemo: React.FC<SlideProps> = () => {
  return (
    <Slide>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '0 64px',
      }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ width: '100%', maxWidth: 1440 }}
        >
          {/* Header */}
          <motion.div variants={staggerItem} style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
              }}>
                18 · Application Demo
              </span>
              <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
            </div>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 90,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1A1614',
              margin: 0,
              marginBottom: 64,
            }}
          >
            Live Demonstration
          </motion.h1>

          {/* Subtitles: "Two Cases" "Same Workflow" "Different Clinical Picture" */}
          <motion.div
            variants={staggerItem}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 19,
              marginBottom: 77,
            }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 45, fontWeight: 600, color: '#1A1614' }}>
              Two Cases.
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 32, color: '#7A706C' }}>
              Same Workflow.
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 32, color: '#7A706C' }}>
              Different Clinical Picture.
            </span>
          </motion.div>

          {/* Two Case Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            marginBottom: 102,
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.8 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E2DC',
                borderTop: '4px solid #2D6A4F',
                borderRadius: 16,
                padding: '51px',
                boxShadow: '0 4px 20px rgba(26,22,20,0.06)',
              }}
            >
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#2D6A4F',
                margin: 0,
                marginBottom: 13,
              }}>
                Case A
              </h3>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 38,
                fontWeight: 600,
                color: '#1A1614',
                margin: 0,
              }}>
                Positive clinical pregnancy outcome
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 1.0 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E2DC',
                borderTop: '4px solid #8B1A4A',
                borderRadius: 16,
                padding: '51px',
                boxShadow: '0 4px 20px rgba(26,22,20,0.06)',
              }}
            >
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
                margin: 0,
                marginBottom: 13,
              }}>
                Case B
              </h3>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 38,
                fontWeight: 600,
                color: '#1A1614',
                margin: 0,
              }}>
                Negative clinical pregnancy outcome
              </p>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 1.5 }}
            style={{
              padding: '26px 38px',
              background: '#F5F4F0',
              borderRadius: 8,
              display: 'inline-block',
            }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 500,
              color: '#7A706C',
              margin: 0,
              fontStyle: 'italic',
            }}>
              The prediction is a probability — not a guarantee.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide18LiveDemo;
