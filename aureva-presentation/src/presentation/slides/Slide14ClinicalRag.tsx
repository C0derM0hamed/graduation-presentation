/**
 * Slide 14 — CLINICAL RAG PIPELINE
 * Document sources → extraction → knowledge base → embeddings → Qdrant → retrieval → evidence
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

/** Document source icon */
const DocIcon: React.FC<{ label: string; delay: number }> = ({ label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease, delay }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
    }}
  >
    {/* Doc shape */}
    <div style={{
      width: 52,
      height: 64,
      background: '#FFFFFF',
      border: '2px solid #E5E2DC',
      borderRadius: 8,
      boxShadow: '0 2px 10px rgba(26,22,20,0.07)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dog-ear */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 14,
        height: 14,
        background: '#F2E6EC',
        borderLeft: '1px solid rgba(139,26,74,0.2)',
        borderBottom: '1px solid rgba(139,26,74,0.2)',
      }} />
      {/* Lines */}
      {[0, 1, 2].map((j) => (
        <div key={j} style={{
          width: 30,
          height: 2,
          background: j === 0 ? '#8B1A4A' : '#E5E2DC',
          borderRadius: 999,
          opacity: j === 0 ? 0.7 : 1,
        }} />
      ))}
    </div>
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 20,
      fontWeight: 700,
      color: '#8B1A4A',
      letterSpacing: '0.08em',
    }}>
      {label}
    </span>
  </motion.div>
);

const pipelineSteps = [
  { label: 'PDF Extraction',    sub: 'Parse clinical documents',         icon: '⊡' },
  { label: 'Knowledge Base',    sub: 'Indexed reference corpus',         icon: '⊟' },
  { label: 'Semantic Chunks',   sub: 'Split into retrievable segments',   icon: '⊞' },
  { label: 'Embeddings',        sub: 'Dense vector representations',      icon: '▣', accent: true },
  { label: 'Qdrant',            sub: 'Vector database storage',           icon: '◈', dark: true },
  { label: 'Retrieval',         sub: 'Semantic similarity search',        icon: '⊕' },
  { label: 'Clinical Evidence', sub: 'Grounded reference passages',       icon: '◉', final: true },
];

const Slide14ClinicalRag: React.FC<SlideProps> = () => {
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
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B1A4A',
          }}>
            14 · RAG Pipeline
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 55,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#1A1614',
            margin: 0,
            marginBottom: 10,
          }}
        >
          Clinical RAG Pipeline
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          style={{ height: 2, width: 56, background: '#8B1A4A', borderRadius: 999, transformOrigin: 'left' }}
        />
      </div>

      {/* ── Two-column layout ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 2.2fr',
        gap: 50,
        alignItems: 'center',
        minHeight: 0,
      }}>

        {/* LEFT — Document sources */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              marginBottom: 25,
            }}
          >
            Source Guidelines
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 21 }}>
            {['ESHRE', 'NICE', 'ASRM'].map((src, i) => (
              <DocIcon key={src} label={src} delay={0.3 + i * 0.1} />
            ))}
          </div>

          {/* Arrow pointing right to pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
            style={{
              marginTop: 33,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 7,
            }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 20,
              fontWeight: 400,
              color: '#7A706C',
              margin: 0,
              textAlign: 'center',
              lineHeight: 1.5,
            }}>
              Clinical guidelines<br />from leading bodies
            </p>
          </motion.div>
        </div>

        {/* RIGHT — Pipeline steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {pipelineSteps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease, delay: 0.35 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 21,
                  padding: '17px 25px',
                  background: step.dark
                    ? '#1A1614'
                    : step.accent
                    ? '#8B1A4A'
                    : step.final
                    ? '#F2E6EC'
                    : '#FFFFFF',
                  border: step.dark || step.accent
                    ? 'none'
                    : step.final
                    ? '1px solid rgba(139,26,74,0.2)'
                    : '1px solid #E5E2DC',
                  borderRadius: 14,
                  boxShadow: step.dark || step.accent
                    ? '0 6px 20px rgba(26,22,20,0.12)'
                    : '0 2px 8px rgba(26,22,20,0.04)',
                  width: '100%',
                  borderLeft: step.final ? '4px solid #8B1A4A' : undefined,
                }}
              >
                {/* Step number */}
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: step.dark
                    ? 'rgba(255,255,255,0.1)'
                    : step.accent
                    ? 'rgba(255,255,255,0.15)'
                    : step.final
                    ? 'rgba(139,26,74,0.1)'
                    : '#F5F4F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 21,
                    fontWeight: 700,
                    color: step.dark || step.accent ? '#FFFFFF' : '#8B1A4A',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 25,
                    fontWeight: 600,
                    color: step.dark || step.accent
                      ? '#FFFFFF'
                      : step.final
                      ? '#1A1614'
                      : '#1A1614',
                    margin: 0,
                    marginBottom: 4,
                  }}>
                    {step.label}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 20,
                    fontWeight: 400,
                    color: step.dark || step.accent
                      ? 'rgba(255,255,255,0.65)'
                      : '#7A706C',
                    margin: 0,
                  }}>
                    {step.sub}
                  </p>
                </div>
              </motion.div>

              {/* Connector between steps */}
              {i < pipelineSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.42 + i * 0.1 }}
                  style={{
                    marginLeft: 29,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '2px 0 2px 28px',
                  }}
                >
                  <div style={{ width: 1.5, height: 14, background: 'rgba(139,26,74,0.25)' }} />
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M5 6L0 0h10z" fill="rgba(139,26,74,0.3)" />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default Slide14ClinicalRag;
