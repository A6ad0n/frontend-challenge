import type { Meta, StoryObj } from '@storybook/react-vite';
import { CatCard } from './CatCard';
import type { Cat } from '../types/cat';

const baseCat: Cat = {
  id: 'cat-story-1',
  url: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80',
  width: 1024,
  height: 1024,
};

const meta = {
  title: 'Entities/Cat/CatCard',
  component: CatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    cat: baseCat,
  },
} satisfies Meta<typeof CatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
