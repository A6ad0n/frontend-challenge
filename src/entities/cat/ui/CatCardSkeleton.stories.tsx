import type { Meta, StoryObj } from '@storybook/react-vite';
import { CatCardSkeleton } from './CatCardSkeleton';

const meta = {
  title: 'Entities/Cat/CatCardSkeleton',
  component: CatCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 300, maxWidth: '90vw' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CatCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
