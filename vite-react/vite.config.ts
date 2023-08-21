/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';
import generouted from '@generouted/react-router/plugin';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr(),
      checker({ typescript: true }),
      visualizer(),
      generouted(),
    ],
    preview: {
      port: 3000,
    },
    server: {
      port: 3000,
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
          'src/testUtils',
          'src/i18n',
          'src/main.tsx',
          'src/env.ts',
          'src/types',
          'src/router.ts',
          'src/pages/_app.tsx',
          'src/pages/404.tsx',
        ],
      },
    },
  };
});
