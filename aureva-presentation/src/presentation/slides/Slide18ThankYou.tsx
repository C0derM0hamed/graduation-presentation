/**
 * Slide 19 — THANK YOU
 * Final presentation slide.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const Slide18ThankYou: React.FC<SlideProps> = () => {
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
          style={{ width: '100%', maxWidth: 1280 }}
        >
          {/* Header */}
          <motion.div variants={staggerItem} style={{ marginBottom: 38 }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 29,
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
            }}>
              AUREVA
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1A1614',
              margin: 0,
              marginBottom: 51,
            }}
          >
            Thank You
          </motion.h1>

          <motion.div
            variants={staggerItem}
            style={{
              height: 2,
              width: 80,
              background: '#8B1A4A',
              borderRadius: 999,
              margin: '0 auto 40px',
            }}
          />

          <motion.p
            variants={staggerItem}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 35,
              fontWeight: 400,
              color: '#7A706C',
              margin: 0,
              marginBottom: 102,
            }}
          >
            We welcome your questions and guidance.
          </motion.p>

          {/* Acknowledgments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.2 }}
            style={{
              paddingTop: 77,
              borderTop: '1px solid #E5E2DC',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 26,
            }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#8B1A4A',
              margin: 0,
              marginBottom: 13,
            }}>
              With Special Appreciation To
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 64px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 600, color: '#1A1614' }}>
                  Dr. Mahmoud Abdelaleem
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 21, color: '#7A706C', marginTop: 6 }}>
                  Clinical Advisor
                </span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 600, color: '#1A1614' }}>
                  Eng. Josphine Boles
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 21, color: '#7A706C', marginTop: 6 }}>
                  Technical Supervisor
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 600, color: '#1A1614' }}>
                  ITI Assiut Branch
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 21, color: '#7A706C', marginTop: 6 }}>
                  Committee
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide18ThankYou;
