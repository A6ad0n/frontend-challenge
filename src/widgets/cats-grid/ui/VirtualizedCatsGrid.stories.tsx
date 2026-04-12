import type { Meta, StoryObj } from '@storybook/react-vite';
import { VirtualizedCatsGrid } from './VirtualizedCatsGrid';
import type { Cat } from '@/entities/cat';

const cats: Cat[] = Array.from({ length: 18 }).map((_, index) => ({
  id: `virtual-cat-${index + 1}`,
  url: `https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80&ixid=${index}`,
  width: 1200,
  height: 800,
}));

const meta = {
  title: 'Widgets/CatsGrid/VirtualizedCatsGrid',
  component: VirtualizedCatsGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof VirtualizedCatsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cats,
    hasNextPage: true,
    isFetchingNextPage: false,
  },
};

export const Empty: Story = {
  args: {
    cats: [],
    hasNextPage: false,
    isFetchingNextPage: false,
  },
};
