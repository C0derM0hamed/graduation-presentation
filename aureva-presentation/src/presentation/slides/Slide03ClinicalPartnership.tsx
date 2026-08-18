/**
 * Slide 03 — Clinical Partnership
 * Real clinical collaboration photographs.
 *
 * FIX: Images now use object-fit: contain so no person or detail is cropped.
 * Layout changed to three equal horizontal cards (editorial triptych).
 */

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide/Slide';
import { SlideProps } from '../types';
import { staggerContainer, staggerItem, fadeUpVariant } from '../assets/motionVariants';

import imageOne   from '../imgs/image-one.jpeg';
import imageTwo   from '../imgs/image-two.jpeg';
import imageThree from '../imgs/image-three.jpeg';

const ease = [0.16, 1, 0.3, 1] as const;

const Slide03ClinicalPartnership: React.FC<SlideProps> = () => {
  const photos = [
    { src: imageOne,   alt: 'Clinical collaboration meeting — session one'   },
    { src: imageTwo,   alt: 'Clinical collaboration meeting — session two'   },
    { src: imageThree, alt: 'Clinical collaboration meeting — session three' },
  ];

  return (
    <Slide>
      {/* ── HEADER ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: 58 }}
      >
        <motion.div variants={staggerItem} style={{ marginBottom: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 28, height: 2, background: '#8B1A4A', borderRadius: 999 }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 21,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B1A4A',
              }}
            >
              03 · Clinical Partnership
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 67,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#1A1614',
            margin: 0,
            marginBottom: 16,
            maxWidth: 1120,
          }}
        >
          Built with real clinical collaboration.
        </motion.h1>

        <motion.div
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any, delay: 0.15 },
            },
          }}
          style={{
            height: 2,
            width: 56,
            background: '#8B1A4A',
            borderRadius: 999,
            transformOrigin: 'left',
            marginBottom: 26,
          }}
        />

        <motion.p
          variants={staggerItem}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 29,
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#7A706C',
            margin: 0,
            maxWidth: 1152,
          }}
        >
          AUREVA's clinical design was shaped through direct sessions with Dr. Mahmoud Abdelaleem —
          reviewing real cases, real workflows, and real clinical decisions.
        </motion.p>
      </motion.div>

      {/* ── PHOTO TRIPTYCH ── three full-image cards ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          flex: 1,
          minHeight: 0,
        }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.alt}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.12 }}
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              background: '#F5F4F0',
              border: '1px solid #E5E2DC',
              boxShadow: '0 4px 20px rgba(26,22,20,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              /* Fixed height so images don't collapse */
              height: '100%',
              minHeight: 320,
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={{
                /* contain: never crops — whole image always visible */
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                padding: 8,
              }}
            />

            {/* Subtle vignette at bottom for depth */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 60,
                background:
                  'linear-gradient(to top, rgba(245,244,240,0.7) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* ── BOTTOM CREDIT ── */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 } as any}
        style={{
          marginTop: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 13,
            padding: '16px 29px',
            background: '#F2E6EC',
            borderRadius: 999,
            border: '1px solid rgba(139,26,74,0.18)',
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B1A4A' }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              color: '#8B1A4A',
              letterSpacing: '0.06em',
            }}
          >
            Dr. Mahmoud Abdelaleem · Assiut University · Clinical Advisor
          </span>
        </div>
      </motion.div>
    </Slide>
  );
};

export default Slide03ClinicalPartnership;
