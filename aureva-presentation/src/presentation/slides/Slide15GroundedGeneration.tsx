/**
 * Slide 15 — GROUNDED CLINICAL GENERATION
 * Patient Context + Retrieved Evidence → LLM (controlled) → Report → Validation → Citations
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

const Slide15GroundedGeneration: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* ── Header ── */}
      <div style={{ marginBottom: 38 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
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
            15 · Clinical Generation
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
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
            marginBottom: 12,
          }}
        >
          Grounded Clinical Generation
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          style={{ height: 2, width: 56, background: '#8B1A4A', borderRadius: 999, transformOrigin: 'left' }}
        />
      </div>

      {/* ── Main layout ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 68,
        alignItems: 'center',
        minHeight: 0,
      }}>

        {/* LEFT — Pipeline diagram */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

          {/* Two inputs merge */}
          <div style={{ display: 'flex', gap: 29, marginBottom: 0 }}>
            {[
              { label: 'Patient Context', sub: 'Clinical data · history · prediction' },
              { label: 'Retrieved Evidence', sub: 'ESHRE · NICE · ASRM guidelines' },
            ].map((inp, i) => (
              <motion.div
                key={inp.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.28 + i * 0.12 }}
                style={{
                  padding: '17px 22px',
                  background: '#FFFFFF',
                  border: '1px solid #E5E2DC',
                  borderRadius: 12,
                  boxShadow: '0 2px 8px rgba(26,22,20,0.05)',
                  textAlign: 'center',
                  flex: 1,
                }}
              >
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#1A1614',
                  margin: 0,
                  marginBottom: 5,
                }}>
                  {inp.label}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 19,
                  color: '#7A706C',
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  {inp.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Converging arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52 }}
            style={{
              position: 'relative',
              width: '80%',
              height: 36,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            {/* Left diagonal line */}
            <div style={{
              position: 'absolute',
              left: '10%',
              top: 0,
              width: 1,
              height: 30,
              background: 'rgba(139,26,74,0.3)',
              transformOrigin: 'top left',
              transform: 'rotate(25deg)',
            }} />
            {/* Right diagonal line */}
            <div style={{
              position: 'absolute',
              right: '10%',
              top: 0,
              width: 1,
              height: 30,
              background: 'rgba(139,26,74,0.3)',
              transformOrigin: 'top right',
              transform: 'rotate(-25deg)',
            }} />
            {/* Center arrow tip */}
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M4 6L0 0h8z" fill="rgba(139,26,74,0.4)" />
            </svg>
          </motion.div>

          {/* LLM node — central, controlled */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
            style={{
              padding: '24px 48px',
              background: '#1A1614',
              borderRadius: 16,
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(26,22,20,0.18)',
              position: 'relative',
              overflow: 'hidden',
              width: '72%',
            }}
          >
            {/* Subtle pattern */}
            <div style={{
              position: 'absolute',
              top: -30,
              right: -30,
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'rgba(139,26,74,0.12)',
            }} />
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 38,
              fontWeight: 700,
              color: '#FAFAF8',
              margin: 0,
              marginBottom: 5,
              position: 'relative',
            }}>
              LLM
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 19,
              color: 'rgba(250,250,248,0.5)',
              margin: 0,
              position: 'relative',
            }}>
              Constrained generation · evidence-grounded
            </p>
          </motion.div>

          {/* Arrow down */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.35, ease, delay: 0.82 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: 'top', margin: '4px 0' }}
          >
            <div style={{ width: 1, height: 20, background: 'rgba(139,26,74,0.3)' }} />
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M4 6L0 0h8z" fill="rgba(139,26,74,0.4)" />
            </svg>
          </motion.div>

          {/* Output steps */}
          {[
            { label: 'Structured Report', sub: 'Prediction · Explanation · Protocol Guidance', highlight: true },
            { label: 'Validation',         sub: 'Completeness and coherence check' },
            { label: 'Citations',          sub: 'Source references from retrieved evidence', final: true },
          ].map((step, i) => (
            <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%' }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease, delay: 0.9 + i * 0.12 }}
                style={{
                  padding: '14px 24px',
                  background: step.highlight ? '#8B1A4A' : step.final ? '#F2E6EC' : '#F5F4F0',
                  border: step.highlight ? 'none' : step.final ? '1px solid rgba(139,26,74,0.2)' : '1px solid #E5E2DC',
                  borderRadius: 12,
                  textAlign: 'center',
                  width: '100%',
                  borderLeft: step.final ? '3px solid #8B1A4A' : undefined,
                }}
              >
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 24,
                  fontWeight: 600,
                  color: step.highlight ? '#FFFFFF' : '#1A1614',
                  margin: 0,
                  marginBottom: 4,
                }}>
                  {step.label}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 19,
                  color: step.highlight ? 'rgba(255,255,255,0.6)' : '#7A706C',
                  margin: 0,
                }}>
                  {step.sub}
                </p>
              </motion.div>
              {i < 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.97 + i * 0.12 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2px 0' }}
                >
                  <div style={{ width: 1, height: 12, background: 'rgba(139,26,74,0.25)' }} />
                  <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                    <path d="M3 4L0 0h6z" fill="rgba(139,26,74,0.3)" />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — Principle cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 5,
            }}
          >
            Design Principles
          </motion.p>

          {[
            {
              title: 'Evidence First',
              body: 'The LLM can only draw from retrieved clinical evidence — it does not generate protocol recommendations freely.',
              delay: 0.36,
            },
            {
              title: 'Controlled Generation',
              body: 'Generation is structured and constrained. The LLM is one component inside a pipeline, not the decision-maker.',
              delay: 0.5,
            },
            {
              title: 'Traceable Output',
              body: 'Every protocol suggestion is traceable to a specific source guideline through embedded citations.',
              delay: 0.64,
            },
            {
              title: 'Physician in Control',
              body: 'AUREVA presents clinical context and guidance. The physician makes the final clinical decision.',
              delay: 0.78,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease, delay: card.delay }}
              style={{
                padding: '22px 26px',
                background: '#FFFFFF',
                border: '1px solid #E5E2DC',
                borderRadius: 14,
                boxShadow: '0 2px 8px rgba(26,22,20,0.05)',
              }}
            >
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: '#1A1614',
                margin: 0,
                marginBottom: 8,
              }}>
                {card.title}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 22,
                fontWeight: 400,
                color: '#7A706C',
                margin: 0,
                lineHeight: 1.65,
              }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default Slide15GroundedGeneration;
