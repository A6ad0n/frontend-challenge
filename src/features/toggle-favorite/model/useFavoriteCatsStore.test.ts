import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useFavoriteCatsStore } from './useFavoriteCatsStore';

const resetStore = (): void => {
  useFavoriteCatsStore.setState({ favoriteIds: [] });
};

describe('useFavoriteCatsStore', () => {
  beforeEach(() => {
    resetStore();
    window.localStorage.removeItem('favorite-cats-store');
  });

  afterEach(() => {
    resetStore();
    window.localStorage.removeItem('favorite-cats-store');
  });

  it('has empty favoriteIds by default', () => {
    expect(useFavoriteCatsStore.getState().favoriteIds).toEqual([]);
  });

  it('adds cat id on toggle when it is not in favorites', () => {
    useFavoriteCatsStore.getState().toggleFavorite('cat-1');

    expect(useFavoriteCatsStore.getState().favoriteIds).toEqual(['cat-1']);
  });

  it('removes cat id on toggle when it is already in favorites', () => {
    useFavoriteCatsStore.setState({ favoriteIds: ['cat-1'] });

    useFavoriteCatsStore.getState().toggleFavorite('cat-1');

    expect(useFavoriteCatsStore.getState().favoriteIds).toEqual([]);
  });

  it('sets favorite ids via setFavoriteIds', () => {
    useFavoriteCatsStore.getState().setFavoriteIds(['cat-1', 'cat-2']);

    expect(useFavoriteCatsStore.getState().favoriteIds).toEqual(['cat-1', 'cat-2']);
  });

  it('returns correct status from isFavorite', () => {
    useFavoriteCatsStore.setState({ favoriteIds: ['cat-2'] });

    expect(useFavoriteCatsStore.getState().isFavorite('cat-2')).toBe(true);
    expect(useFavoriteCatsStore.getState().isFavorite('cat-1')).toBe(false);
  });
});
