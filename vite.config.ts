/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    dts({
      staticImport: true,
      insertTypesEntry: true,
      outDir: path.resolve(__dirname, './npm/types'),
      entryRoot: path.resolve(__dirname, './packages'),
      // 包含的文件
      include: ['packages/**/*.ts', 'packages/**/*.vue'],
      // 排除测试文件
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/styles/variables.scss";`,
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './packages/components'),
      name: 'ImDesign',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
        assetFileNames: 'index.css',
      },
    },
    outDir: 'npm/dist',
  },
});
