import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { flatRoutes } from 'remix-flat-routes';
import { remixDevTools } from 'remix-development-tools';
import tsconfigPaths from 'vite-tsconfig-paths';

declare module '@remix-run/server-runtime' {
  interface Future {
    unstable_singleFetch: true; // 👈 enable _types_ for single-fetch
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    remixDevTools(),
    // disable remix plugin for vitest
    !process.env.VITEST &&
      remix({
        future: {
          v3_singleFetch: true,
          unstable_optimizeDeps: true,
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
        ssr: false,
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
  preview: {
    port: 3000,
    open: true,
  },
  server: {
    port: 3000,
    open: true,
    // https://github.com/remix-run/remix/discussions/8917#discussioncomment-8640023
    warmup: {
      clientFiles: [
        './app/entry.client.tsx',
        './app/root.tsx',
        './app/routes/**/*',
      ],
    },
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
