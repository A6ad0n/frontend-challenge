/// <reference types="vite/client" />

import type { Preview } from '@storybook/react-vite'
import '../src/index.css';

export default {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
} satisfies Preview;