import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@app': path.resolve(__dirname, './src/app'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
        '@features': path.resolve(__dirname, './src/features'),
        '@entities': path.resolve(__dirname, './src/entities'),
        '@shared': path.resolve(__dirname, './src/shared'),
        '@ui': path.resolve(__dirname, './src/shared/ui'),
        '@lib': path.resolve(__dirname, './src/shared/lib'),
        '@api': path.resolve(__dirname, './src/shared/api'),
        '@config': path.resolve(__dirname, './src/shared/config'),
        '@types': path.resolve(__dirname, './src/shared/types'),
      },
    },
  };
});
