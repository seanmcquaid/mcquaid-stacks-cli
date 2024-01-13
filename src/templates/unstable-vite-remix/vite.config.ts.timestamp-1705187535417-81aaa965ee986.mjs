// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/sean.mcquaid/Development/scaffolding-templates/src/templates/unstable-vite-remix/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.6/node_modules/vite/dist/node/index.js";
import { unstable_vitePlugin as remix } from "file:///Users/sean.mcquaid/Development/scaffolding-templates/src/templates/unstable-vite-remix/node_modules/.pnpm/@remix-run+dev@2.5.0_@remix-run+serve@2.5.0_@types+node@20.10.6_typescript@5.2.2_vite@5.0.10/node_modules/@remix-run/dev/dist/index.js";
import svgr from "file:///Users/sean.mcquaid/Development/scaffolding-templates/src/templates/unstable-vite-remix/node_modules/.pnpm/vite-plugin-svgr@4.2.0_typescript@5.2.2_vite@5.0.10/node_modules/vite-plugin-svgr/dist/index.js";
import checker from "file:///Users/sean.mcquaid/Development/scaffolding-templates/src/templates/unstable-vite-remix/node_modules/.pnpm/vite-plugin-checker@0.6.2_eslint@8.56.0_typescript@5.2.2_vite@5.0.10/node_modules/vite-plugin-checker/dist/esm/main.js";
import { flatRoutes } from "file:///Users/sean.mcquaid/Development/scaffolding-templates/src/templates/unstable-vite-remix/node_modules/.pnpm/remix-flat-routes@0.6.4_@remix-run+dev@2.5.0/node_modules/remix-flat-routes/dist/index.js";
var __vite_injected_original_dirname = "/Users/sean.mcquaid/Development/scaffolding-templates/src/templates/unstable-vite-remix";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      unstable_ssr: false,
      // ignore all files in routes folder to prevent
      // default remix convention from picking up routes
      ignoredRouteFiles: ["**/*"],
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes);
      }
    }),
    svgr(),
    checker({ typescript: true })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./app")
    }
  },
  preview: {
    port: 3e3,
    open: true
  },
  server: {
    port: 3e3,
    open: true
  },
  build: {
    rollupOptions: {
      // This is to remove the MSW from ever being included in the production build
      external: (id) => id.includes("worker")
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    exclude: ["e2e", "node_modules"],
    coverage: {
      provider: "istanbul",
      reporter: ["lcov"],
      all: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: [
        "src/setupTests.ts",
        "src/utils/testing",
        "src/i18n",
        "src/main.tsx",
        "src/env.ts",
        "src/types",
        "src/router.ts",
        "src/pages/_app.tsx",
        "src/pages/404.tsx",
        "src/icons",
        "src/styles"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2Vhbi5tY3F1YWlkL0RldmVsb3BtZW50L3NjYWZmb2xkaW5nLXRlbXBsYXRlcy9zcmMvdGVtcGxhdGVzL3Vuc3RhYmxlLXZpdGUtcmVtaXhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zZWFuLm1jcXVhaWQvRGV2ZWxvcG1lbnQvc2NhZmZvbGRpbmctdGVtcGxhdGVzL3NyYy90ZW1wbGF0ZXMvdW5zdGFibGUtdml0ZS1yZW1peC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2Vhbi5tY3F1YWlkL0RldmVsb3BtZW50L3NjYWZmb2xkaW5nLXRlbXBsYXRlcy9zcmMvdGVtcGxhdGVzL3Vuc3RhYmxlLXZpdGUtcmVtaXgvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHVuc3RhYmxlX3ZpdGVQbHVnaW4gYXMgcmVtaXggfSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcbmltcG9ydCBjaGVja2VyIGZyb20gJ3ZpdGUtcGx1Z2luLWNoZWNrZXInO1xuaW1wb3J0IHsgZmxhdFJvdXRlcyB9IGZyb20gJ3JlbWl4LWZsYXQtcm91dGVzJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZW1peCh7XG4gICAgICB1bnN0YWJsZV9zc3I6IGZhbHNlLFxuICAgICAgLy8gaWdub3JlIGFsbCBmaWxlcyBpbiByb3V0ZXMgZm9sZGVyIHRvIHByZXZlbnRcbiAgICAgIC8vIGRlZmF1bHQgcmVtaXggY29udmVudGlvbiBmcm9tIHBpY2tpbmcgdXAgcm91dGVzXG4gICAgICBpZ25vcmVkUm91dGVGaWxlczogWycqKi8qJ10sXG4gICAgICByb3V0ZXM6IGFzeW5jIGRlZmluZVJvdXRlcyA9PiB7XG4gICAgICAgIHJldHVybiBmbGF0Um91dGVzKCdyb3V0ZXMnLCBkZWZpbmVSb3V0ZXMpO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBzdmdyKCksXG4gICAgY2hlY2tlcih7IHR5cGVzY3JpcHQ6IHRydWUgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9hcHAnKSxcbiAgICB9LFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIG9wZW46IHRydWUsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gVGhpcyBpcyB0byByZW1vdmUgdGhlIE1TVyBmcm9tIGV2ZXIgYmVpbmcgaW5jbHVkZWQgaW4gdGhlIHByb2R1Y3Rpb24gYnVpbGRcbiAgICAgIGV4dGVybmFsOiBpZCA9PiBpZC5pbmNsdWRlcygnd29ya2VyJyksXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogWycuL3NyYy9zZXR1cFRlc3RzLnRzJ10sXG4gICAgZXhjbHVkZTogWydlMmUnLCAnbm9kZV9tb2R1bGVzJ10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHByb3ZpZGVyOiAnaXN0YW5idWwnLFxuICAgICAgcmVwb3J0ZXI6IFsnbGNvdiddLFxuICAgICAgYWxsOiB0cnVlLFxuICAgICAgaW5jbHVkZTogWydzcmMvKiovKi50cycsICdzcmMvKiovKi50c3gnXSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ3NyYy9zZXR1cFRlc3RzLnRzJyxcbiAgICAgICAgJ3NyYy91dGlscy90ZXN0aW5nJyxcbiAgICAgICAgJ3NyYy9pMThuJyxcbiAgICAgICAgJ3NyYy9tYWluLnRzeCcsXG4gICAgICAgICdzcmMvZW52LnRzJyxcbiAgICAgICAgJ3NyYy90eXBlcycsXG4gICAgICAgICdzcmMvcm91dGVyLnRzJyxcbiAgICAgICAgJ3NyYy9wYWdlcy9fYXBwLnRzeCcsXG4gICAgICAgICdzcmMvcGFnZXMvNDA0LnRzeCcsXG4gICAgICAgICdzcmMvaWNvbnMnLFxuICAgICAgICAnc3JjL3N0eWxlcycsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyx1QkFBdUIsYUFBYTtBQUM3QyxPQUFPLFVBQVU7QUFDakIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsa0JBQWtCO0FBUjNCLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLGNBQWM7QUFBQTtBQUFBO0FBQUEsTUFHZCxtQkFBbUIsQ0FBQyxNQUFNO0FBQUEsTUFDMUIsUUFBUSxPQUFNLGlCQUFnQjtBQUM1QixlQUFPLFdBQVcsVUFBVSxZQUFZO0FBQUEsTUFDMUM7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLFFBQVEsRUFBRSxZQUFZLEtBQUssQ0FBQztBQUFBLEVBQzlCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxRQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMscUJBQXFCO0FBQUEsSUFDbEMsU0FBUyxDQUFDLE9BQU8sY0FBYztBQUFBLElBQy9CLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxNQUFNO0FBQUEsTUFDakIsS0FBSztBQUFBLE1BQ0wsU0FBUyxDQUFDLGVBQWUsY0FBYztBQUFBLE1BQ3ZDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
