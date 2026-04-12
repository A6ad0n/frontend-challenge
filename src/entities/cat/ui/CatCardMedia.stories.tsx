import type { Meta, StoryObj } from '@storybook/react-vite';
import { CatCardMedia } from './CatCardMedia';

const meta = {
  title: 'Entities/Cat/CatCardMedia',
  component: CatCardMedia,
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
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80',
    title: 'Cat card media',
    onImageLoad: () => undefined,
    shouldLoadImage: true,
    shouldPrioritizeImage: false,
  },
} satisfies Meta<typeof CatCardMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingState: Story = {
  args: {
    isImageLoaded: false,
  },
};

export const LoadedState: Story = {
  args: {
    isImageLoaded: true,
  },
};

export const PriorityImage: Story = {
  args: {
    isImageLoaded: true,
    shouldPrioritizeImage: true,
  },
};
