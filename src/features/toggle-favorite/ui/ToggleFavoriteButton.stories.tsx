import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleFavoriteButton } from './ToggleFavoriteButton';
import { useFavoriteCatsStore } from '../model/useFavoriteCatsStore';

const meta = {
  title: 'Features/ToggleFavoriteButton',
  component: ToggleFavoriteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    catId: 'cat-story-toggle',
  },
} satisfies Meta<typeof ToggleFavoriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFavorite: Story = {
  render: (args) => {
    useFavoriteCatsStore.setState({ favoriteIds: [] });
    return <ToggleFavoriteButton {...args} />;
  },
};

export const Favorite: Story = {
  render: (args) => {
    useFavoriteCatsStore.setState({ favoriteIds: [args.catId] });
    return <ToggleFavoriteButton {...args} />;
  },
};
