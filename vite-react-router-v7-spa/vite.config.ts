import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouterDevTools } from 'react-router-devtools';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    reactRouterDevTools(),
    !process.env.VITEST && reactRouter(),
    svgr(),
    checker({ typescript: true }),
  ],
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
    setupFiles: ['./app/utils/testing/setupTests.ts'],
    exclude: ['playwright', 'node_modules'],
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov'],
      all: true,
      include: ['app/**/*.ts', 'app/**/*.tsx'],
      exclude: [
        'app/utils/testing',
        'app/i18n',
        'app/main.tsx',
        'app/env.ts',
        'app/types',
        'app/icons',
        'app/styles',
      ],
    },
  },
});
