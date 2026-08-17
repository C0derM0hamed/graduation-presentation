import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update 'base' to your GitHub Pages repo name when deploying:
  // base: '/aureva-presentation/',
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Split chunks for lazy-loaded slides
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'framer-motion';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});
