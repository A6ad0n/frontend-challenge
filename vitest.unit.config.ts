import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['src/**/*.stories.{js,ts,jsx,tsx'],
  },
});
