/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
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
