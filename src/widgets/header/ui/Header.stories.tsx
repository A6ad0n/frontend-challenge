import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

import { ROUTES } from '@/app/router';

const RouterWrapper = ({
  children,
  initialEntry = ROUTES.cats,
}: {
  children: React.ReactNode;
  initialEntry?: string;
}) => <MemoryRouter initialEntries={[initialEntry]}>{children}</MemoryRouter>;

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main navigation header component with active link highlighting',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

const createStory = (initialEntry: string = ROUTES.cats): Story => ({
  decorators: [
    (Story) => (
      <RouterWrapper initialEntry={initialEntry}>
        <Story />
      </RouterWrapper>
    ),
  ],
});

export const Default = createStory(ROUTES.cats);
Default.parameters = {
  docs: {
    description: {
      story: 'Default header with "Все котики" active',
    },
  },
};

export const FavoritesActive = createStory(ROUTES.favorites);
FavoritesActive.parameters = {
  docs: {
    description: {
      story: 'Header with "Любимые котики" active',
    },
  },
};
