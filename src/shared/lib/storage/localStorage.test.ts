import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { localStorageService, zustandLocalStorage } from './localStorage';

describe('localStorageService', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sets and gets values', () => {
    localStorageService.setItem('key', 'value');

    expect(localStorageService.getItem('key')).toBe('value');
  });

  it('returns null for missing keys', () => {
    expect(localStorageService.getItem('missing')).toBeNull();
  });

  it('removes values', () => {
    localStorageService.setItem('key', 'value');
    localStorageService.removeItem('key');

    expect(localStorageService.getItem('key')).toBeNull();
  });
});

describe('zustandLocalStorage adapter', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('delegates getItem to localStorageService', () => {
    const getItemSpy = vi.spyOn(localStorageService, 'getItem').mockReturnValue('payload');

    expect(zustandLocalStorage.getItem('favorites')).toBe('payload');
    expect(getItemSpy).toHaveBeenCalledWith('favorites');
  });

  it('delegates setItem to localStorageService', () => {
    const setItemSpy = vi.spyOn(localStorageService, 'setItem').mockImplementation(() => undefined);

    zustandLocalStorage.setItem('favorites', 'payload');

    expect(setItemSpy).toHaveBeenCalledWith('favorites', 'payload');
  });

  it('delegates removeItem to localStorageService', () => {
    const removeItemSpy = vi
      .spyOn(localStorageService, 'removeItem')
      .mockImplementation(() => undefined);

    zustandLocalStorage.removeItem('favorites');

    expect(removeItemSpy).toHaveBeenCalledWith('favorites');
  });
});
