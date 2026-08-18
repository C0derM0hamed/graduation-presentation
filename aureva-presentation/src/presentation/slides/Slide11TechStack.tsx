/**
 * Slide 11 — TECHNOLOGY STACK
 * A clean, simple overview of the technologies used.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const stack = [
  {
    layer: 'Frontend Application',
    techs: ['React 19', 'TanStack Start', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    color: '#2D6A4F'
  },
  {
    layer: 'Backend API',
    techs: ['FastAPI', 'Python 3.12', 'Pydantic', 'SQLAlchemy'],
    color: '#8B1A4A'
  },
  {
    layer: 'Intelligence & Data',
    techs: ['PostgreSQL 16', 'XGBoost', 'scikit-learn', 'Qdrant', 'Sentence Transformers'],
    color: '#1A1614'
  },
  {
    layer: 'Infrastructure',
    techs: ['Docker', 'Docker Compose', 'GitHub Actions'],
    color: '#7A706C'
  }
];

const Slide11TechStack: React.FC<SlideProps> = () => {
  return (
    <Slide>
      <div style={{ padding: '0 32px' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={staggerItem} style={{ marginBottom: 48, textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 21,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
              }}>
                11 · Technology Stack
              </span>
              <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
            </div>
            
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 77,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1A1614',
              margin: 0,
            }}>
              Powered by Modern Technology
            </h1>
          </motion.div>

          {/* Tech Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 40,
            maxWidth: 1400,
            margin: '0 auto',
          }}>
            {stack.map((group, i) => (
              <motion.div
                key={group.layer}
                variants={staggerItem}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E2DC',
                  borderTop: `4px solid ${group.color}`,
                  borderRadius: 16,
                  padding: '40px',
                  boxShadow: '0 4px 20px rgba(26,22,20,0.06)',
                }}
              >
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#1A1614',
                  margin: 0,
                  marginBottom: 24,
                }}>
                  {group.layer}
                </h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '10px 20px',
                        background: '#F5F4F0',
                        border: '1px solid #E5E2DC',
                        borderRadius: 999,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 22,
                        fontWeight: 500,
                        color: '#4A4340',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide11TechStack;
