import * as path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    mockReset: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/utils/testing/setupTests.ts'],
    include: [
      'src/**/*.test.tsx',
      'src/**/*.test.ts',
      'src/**/*.test.js',
      'src/**/*.test.jsx',
    ],
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov'],
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/setupTests.ts',
        'src/utils/testing',
        'src/i18n',
        'src/env.client.ts',
        'src/env.server.ts',
        'src/types',
        'src/router.ts',
        'src/icons',
        'src/styles',
        'src/middleware.ts',
        'src/flags',
        'src/app/sign-in',
        'src/app/sign-up',
        'src/app/error.tsx',
        'src/app/loading.tsx',
        'src/app/page.tsx',
        'src/app/not-found.tsx',
        'src/app/layout.tsx',
        'src/constants',
        'src/app/api/prompt/route.ts',
        'src/utils/db.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
