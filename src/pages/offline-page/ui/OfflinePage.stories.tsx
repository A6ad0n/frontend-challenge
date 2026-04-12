import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfflinePage } from './OfflinePage';

const meta = {
  title: 'Pages/OfflinePage',
  component: OfflinePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OfflinePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
