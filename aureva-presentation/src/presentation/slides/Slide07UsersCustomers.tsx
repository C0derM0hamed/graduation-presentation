/**
 * Slide 07 — Users & Customers
 * Who uses AUREVA vs. who pays for it.
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem, accentLineVariant, fadeUpVariant } from '../assets/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

const Slide07UsersCustomers: React.FC<SlideProps> = () => {
  return (
    <Slide>
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: 53 }}
      >
        <motion.div variants={staggerItem} style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
              }}
            >
              06 · Users & Customers
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#1A1614',
            margin: 0,
            marginBottom: 12,
          }}
        >
          Who Uses AUREVA. Who Pays for It.
        </motion.h1>

        <motion.div
          variants={accentLineVariant}
          style={{
            height: 2,
            width: 56,
            background: '#8B1A4A',
            borderRadius: 999,
          }}
        />
      </motion.div>

      {/* Three cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr 1fr',
          gap: 24,
          marginBottom: 44,
          alignItems: 'stretch',
        }}
      >
        {/* USER card */}
        <motion.div
          variants={staggerItem}
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E2DC',
            borderRadius: 16,
            padding: '38px 34px',
            boxShadow: '0 2px 8px rgba(26,22,20,0.06)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 14px',
              background: '#F5F4F0',
              borderRadius: 999,
              marginBottom: 24,
              alignSelf: 'flex-start',
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#7A706C',
              }}
            >
              User
            </span>
          </div>

          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#F5F4F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A4340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 38,
              fontWeight: 700,
              color: '#1A1614',
              margin: 0,
              marginBottom: 10,
              letterSpacing: '-0.01em',
            }}
          >
            The Doctor
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 400,
              color: '#7A706C',
              margin: 0,
              lineHeight: 1.65,
              flex: 1,
            }}
          >
            IVF and reproductive medicine specialists who use AUREVA
            directly within their clinical workflow.
          </p>
        </motion.div>

        {/* CUSTOMER card — emphasized */}
        <motion.div
          variants={staggerItem}
          style={{
            background: '#1A1614',
            border: '1px solid #1A1614',
            borderRadius: 20,
            padding: '44px 38px',
            boxShadow: '0 8px 32px rgba(26,22,20,0.18)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circle */}
          <div
            style={{
              position: 'absolute',
              top: -60,
              right: -60,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(139,26,74,0.15)',
            }}
          />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 14px',
              background: '#8B1A4A',
              borderRadius: 999,
              marginBottom: 24,
              alignSelf: 'flex-start',
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              Customer ·  Recurring
            </span>
          </div>

          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'rgba(139,26,74,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              zIndex: 1,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2E6EC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 42,
              fontWeight: 700,
              color: '#FAFAF8',
              margin: 0,
              marginBottom: 10,
              letterSpacing: '-0.01em',
              zIndex: 1,
            }}
          >
            The Clinic
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 400,
              color: 'rgba(250,250,248,0.6)',
              margin: 0,
              lineHeight: 1.65,
              flex: 1,
              zIndex: 1,
            }}
          >
            IVF clinics subscribe to AUREVA for their physician teams —
            the recurring, institutional customer relationship.
          </p>

          {/* Accent line at bottom */}
          <div
            style={{
              marginTop: 29,
              height: 2,
              background: 'linear-gradient(to right, #8B1A4A, transparent)',
              borderRadius: 999,
              zIndex: 1,
            }}
          />
        </motion.div>

        {/* FUTURE CUSTOMER card */}
        <motion.div
          variants={staggerItem}
          style={{
            background: '#FFFFFF',
            border: '1px dashed rgba(139,26,74,0.25)',
            borderRadius: 16,
            padding: '38px 34px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              background: '#F2E6EC',
              borderRadius: 999,
              marginBottom: 24,
              alignSelf: 'flex-start',
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
              }}
            >
              Future Customer
            </span>
          </div>

          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#F2E6EC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B1A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 38,
              fontWeight: 700,
              color: '#1A1614',
              margin: 0,
              marginBottom: 10,
              letterSpacing: '-0.01em',
            }}
          >
            Hospitals & Networks
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 21,
              fontWeight: 400,
              color: '#7A706C',
              margin: 0,
              lineHeight: 1.65,
              flex: 1,
            }}
          >
            Large hospital networks and reproductive medicine chains —
            the enterprise customer tier as AUREVA scales.
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom statement */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.65 } as any}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '17px 26px',
          background: '#F5F4F0',
          borderRadius: 999,
          border: '1px solid #E5E2DC',
          alignSelf: 'flex-start',
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B1A4A', flexShrink: 0 }} />
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 22,
            fontWeight: 500,
            color: '#1A1614',
            margin: 0,
          }}
        >
          Doctors use AUREVA.{' '}
          <span style={{ color: '#8B1A4A' }}>Clinics become the recurring customer.</span>
        </p>
      </motion.div>
    </Slide>
  );
};

export default Slide07UsersCustomers;
