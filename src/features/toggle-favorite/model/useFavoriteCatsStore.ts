import { zustandLocalStorage } from '@/shared/lib/storage/localStorage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavoriteCatsState {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  setFavoriteIds: (ids: string[]) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoriteCatsStore = create<FavoriteCatsState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      toggleFavorite: (id) => {
        set((state) => {
          const exists = get().favoriteIds.includes(id);

          return {
            favoriteIds: exists
              ? state.favoriteIds.filter((favId) => favId !== id)
              : [...state.favoriteIds, id],
          };
        });
      },
      setFavoriteIds: (ids) => {
        set({ favoriteIds: ids });
      },
      isFavorite: (id) => get().favoriteIds.includes(id),
    }),
    {
      name: 'favorite-cats-store',
      storage: createJSONStorage(() => zustandLocalStorage),
      partialize: (state) => ({ favoriteIds: state.favoriteIds }),
    }
  )
);
