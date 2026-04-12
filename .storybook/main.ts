import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [svgr()],
      resolve: {
        alias: {
          '@': path.resolve(dirname, '../src'),
          '@app': path.resolve(dirname, '../src/app'),
          '@pages': path.resolve(dirname, '../src/pages'),
          '@widgets': path.resolve(dirname, '../src/widgets'),
          '@features': path.resolve(dirname, '../src/features'),
          '@entities': path.resolve(dirname, '../src/entities'),
          '@shared': path.resolve(dirname, '../src/shared'),
          '@ui': path.resolve(dirname, '../src/shared/ui'),
          '@lib': path.resolve(dirname, '../src/shared/lib'),
          '@api': path.resolve(dirname, '../src/shared/api'),
          '@config': path.resolve(dirname, '../src/shared/config'),
          '@types': path.resolve(dirname, '../src/shared/types'),
        },
      },
    }),
} satisfies StorybookConfig;