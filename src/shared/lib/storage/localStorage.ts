import type { StateStorage } from 'zustand/middleware';

const getStorage = (): Storage | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  return window.localStorage;
};

export const localStorageService = {
  getItem: (key: string): string | null => getStorage()?.getItem(key) ?? null,
  setItem: (key: string, value: string): void => {
    getStorage()?.setItem(key, value);
  },
  removeItem: (key: string): void => {
    getStorage()?.removeItem(key);
  },
};

export const zustandLocalStorage: StateStorage = {
  getItem: (name) => localStorageService.getItem(name),
  setItem: (name, value) => localStorageService.setItem(name, value),
  removeItem: (name) => localStorageService.removeItem(name),
};
