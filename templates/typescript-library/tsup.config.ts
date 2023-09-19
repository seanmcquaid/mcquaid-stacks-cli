import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  format: ['cjs', 'esm'],
  minify: true,
  dts: true,
});
