/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), checker({ typescript: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 3000,
    open: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      // This is to remove the MSW from ever being included in the production build
      external: id => id.includes('worker'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    exclude: ['e2e', 'node_modules'],
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov'],
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/setupTests.ts',
        'src/utils/testing',
        'src/i18n',
        'src/main.tsx',
        'src/env.ts',
        'src/types',
        'src/router.ts',
        'src/pages/_app.tsx',
        'src/pages/404.tsx',
        'src/icons',
        'src/styles',
      ],
    },
  },
});
