/**
 * Slide 02 — Clinical Origin
 * Built in Partnership With Real IVF Expertise
 *
 * FIX: image-four (Dr. Mahmoud Abdelaleem photograph) is now
 * displayed in the doctor card, replacing the placeholder initial.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import {
  staggerContainer,
  staggerItem,
  fadeUpVariant,
  scaleInVariant,
  accentLineVariant,
  fadeInVariant,
} from '../assets/motionVariants';

import imageFour from '../imgs/image-four.jpg';

const ease = [0.16, 1, 0.3, 1] as const;

const Slide02ClinicalOrigin: React.FC<SlideProps> = () => {
  const roles = [
    'Senior IVF Consultant',
    'Professor of Obstetrics and Gynecology',
    'Faculty of Medicine, Assiut University',
  ];

  return (
    <Slide>
      {/* Layout: left column (header + doctor card) + right column (contribution chain) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 64,
          height: '100%',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT — Content & Contributions ── */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Eyebrow + Title */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: 48 }}
          >
            <motion.div variants={staggerItem} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#8B1A4A',
                  }}
                >
                  02 · Clinical Origin
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#1A1614',
                margin: 0,
                marginBottom: 12,
                maxWidth: 520,
              }}
            >
              Built in Partnership With Real IVF Expertise
            </motion.h1>

            <motion.div
              variants={accentLineVariant}
              style={{
                height: 2,
                width: 56,
                background: '#8B1A4A',
                borderRadius: 999,
                marginBottom: 20,
              }}
            />

            <motion.p
              variants={staggerItem}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#7A706C',
                margin: 0,
                maxWidth: 480,
              }}
            >
              AUREVA was not built in isolation. Every design decision
              was grounded in the real clinical workflow of a practising IVF specialist.
            </motion.p>
          </motion.div>

          {/* Contribution Chain */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            <motion.p
              variants={fadeUpVariant}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
                marginBottom: 24,
              }}
            >
              Contributions
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                {
                  label: 'Clinical Expertise',
                  sub: 'Deep knowledge of IVF workflow and treatment protocols',
                  num: '01',
                },
                {
                  label: 'Real-World Data',
                  sub: 'Direct access to real patient cycle records and outcomes',
                  num: '02',
                },
                {
                  label: 'Ongoing Validation',
                  sub: 'Continuous clinical review of AUREVA predictions',
                  num: '03',
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={staggerItem}
                  custom={i}
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 20,
                      paddingBottom: i < 2 ? 32 : 0,
                    }}
                  >
                    {/* Left: number + connector line */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: i === 0 ? '#8B1A4A' : '#F2E6EC',
                          border: `1.5px solid ${i === 0 ? '#8B1A4A' : 'rgba(139,26,74,0.25)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 13,
                            fontWeight: 700,
                            color: i === 0 ? '#FFFFFF' : '#8B1A4A',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {step.num}
                        </span>
                      </div>
                      {i < 2 && (
                        <div
                          style={{
                            width: 1,
                            flex: 1,
                            minHeight: 28,
                            background:
                              'linear-gradient(to bottom, rgba(139,26,74,0.3), rgba(139,26,74,0.08))',
                            marginTop: 6,
                          }}
                        />
                      )}
                    </div>

                    {/* Right: text */}
                    <div style={{ paddingTop: 6 }}>
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 20,
                          fontWeight: 600,
                          color: '#1A1614',
                          margin: 0,
                          marginBottom: 6,
                          lineHeight: 1.2,
                        }}
                      >
                        {step.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          fontWeight: 400,
                          color: '#7A706C',
                          margin: 0,
                          lineHeight: 1.6,
                          maxWidth: 360,
                        }}
                      >
                        {step.sub}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT — Large Image & Card Below ── */}
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            style={{
              width: '100%',
              height: 560,
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(26,22,20,0.12)',
              background: '#F2E6EC',
              marginBottom: 24,
            }}
          >
            <img
              src={imageFour}
              alt="Dr. Mahmoud Abdelaleem"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center top',
                display: 'block',
                background: '#FFFFFF',
              }}
            />
          </motion.div>

          {/* Partner Card Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
            style={{
              background: '#FFFFFF',
              borderRadius: 16,
              padding: '24px 28px',
              boxShadow: '0 8px 32px rgba(26,22,20,0.08)',
              border: '1px solid #E5E2DC',
              borderLeft: '4px solid #8B1A4A',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
                margin: 0,
                marginBottom: 8,
              }}
            >
              Clinical Partner
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 700,
                color: '#1A1614',
                margin: 0,
                marginBottom: 12,
                letterSpacing: '-0.01em',
              }}
            >
              Dr. Mahmoud Abdelaleem
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {roles.map((role) => (
                <div
                  key={role}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: '#C96090',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: '#4A4340',
                      lineHeight: 1.5,
                    }}
                  >
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide02ClinicalOrigin;
