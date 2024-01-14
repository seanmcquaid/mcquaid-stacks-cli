/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import { unstable_vitePlugin as remix } from '@remix-run/dev';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { flatRoutes } from 'remix-flat-routes';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    remix({
      unstable_ssr: false,
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
