import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.build.json',
      entryRoot: 'packages',
      outDir: 'npm/dist/types',
      include: ['packages'],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './packages/components/index.ts'), // 明确入口
      name: 'ImDesign',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => `im-design.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'dayjs'],
      output: {
        globals: {
          vue: 'Vue',
          dayjs: 'dayjs',
        },
        exports: 'named',
        assetFileNames: 'index.css',
      },
    },
    outDir: 'npm/dist',
  },
});
