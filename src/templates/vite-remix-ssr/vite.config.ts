/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { flatRoutes } from 'remix-flat-routes';
import { remixDevTools } from 'remix-development-tools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    remixDevTools(),
    // disable remix plugin for vitest
    !process.env.VITEST &&
      remix({
        ssr: true,
        // ignore all files in routes folder to prevent
        // default remix convention from picking up routes
        ignoredRouteFiles: ['**/*'],
        routes: async defineRoutes => {
          return flatRoutes('routes', defineRoutes);
        },
      }),
    svgr(),
    checker({ typescript: true }),
  ],
  ssr: {
    noExternal: ['remix-i18next'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
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
    setupFiles: ['./app/utils/testing/setupTests.ts'],
    exclude: ['e2e', 'node_modules'],
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
