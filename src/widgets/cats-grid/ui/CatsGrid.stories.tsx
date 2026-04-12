import type { Meta, StoryObj } from '@storybook/react-vite';
import { CatsGrid } from './CatsGrid';
import type { Cat } from '@/entities/cat';

const cats: Cat[] = [
  {
    id: 'story-cat-1',
    url: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
    width: 1200,
    height: 800,
  },
  {
    id: 'story-cat-2',
    url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80',
    width: 1200,
    height: 800,
  },
  {
    id: 'story-cat-3',
    url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
    width: 1200,
    height: 800,
  },
  {
    id: 'story-cat-4',
    url: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=900&q=80',
    width: 1200,
    height: 800,
  },
  {
    id: 'story-cat-5',
    url: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=900&q=80',
    width: 1200,
    height: 800,
  },
  {
    id: 'story-cat-6',
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80',
    width: 1200,
    height: 800,
  },
];

const meta = {
  title: 'Widgets/CatsGrid/CatsGrid',
  component: CatsGrid,
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
} satisfies Meta<typeof CatsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cats,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    cats: [],
    isLoading: true,
    skeletonCount: 12,
  },
};
