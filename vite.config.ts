import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig((bindOpt: any) => {
  const { mode } = bindOpt;
  console.log(mode);

  const resolve = {
    alias: {
      '@': path.resolve(__dirname, './packages'),
    },
  };

  // 库模式打包配置
  return {
    plugins: [
      dts({
        tsconfigPath: './tsconfig.build.json',
        entryRoot: 'packages',
        outDir: 'npm/dist/types',
        include: ['packages'],
      }),
      vue(),
    ],
    resolve,
    build: {
      lib: {
        entry: path.resolve(__dirname, './packages/components/index.ts'),
        name: 'ImDesign',
        formats: ['es', 'umd', 'cjs'],
        fileName: (format) => `im-design.${format}.js`,
      },
      sourcemap: true,
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
  };
});
