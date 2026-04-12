import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CATS_API_CONFIG } from '@/shared/config/cats';
import { API_ENDPOINTS } from './endpoints';
import { getCatById, getCats } from './catApi';

const getMock = vi.hoisted(() => vi.fn());

vi.mock('@/shared/api', () => ({
  catApiClient: {
    get: getMock,
  },
}));

describe('catApi', () => {
  beforeEach(() => {
    getMock.mockReset();
  });

  it('getCats returns data and uses default params', async () => {
    const payload = [{ id: 'cat-1', url: 'u', width: 100, height: 100 }];
    getMock.mockResolvedValueOnce({ data: payload });

    const result = await getCats({ page: 3 });

    expect(result).toEqual(payload);
    expect(getMock).toHaveBeenCalledWith(API_ENDPOINTS.CATS.SEARCH, {
      params: {
        page: 3,
        limit: CATS_API_CONFIG.DEFAULT_LIMIT,
        order: CATS_API_CONFIG.DEFAULT_ORDER,
        size: CATS_API_CONFIG.DEFAULT_SIZE,
        mime_types: CATS_API_CONFIG.DEFAULT_MIME_TYPES.join(','),
      },
    });
  });

  it('getCats uses custom params when provided', async () => {
    const payload = [{ id: 'cat-2', url: 'u2', width: 320, height: 240 }];
    getMock.mockResolvedValueOnce({ data: payload });

    const result = await getCats({
      page: 1,
      limit: 5,
      order: 'ASC',
      size: 'full',
      mimeTypes: ['gif'],
    });

    expect(result).toEqual(payload);
    expect(getMock).toHaveBeenCalledWith(API_ENDPOINTS.CATS.SEARCH, {
      params: {
        page: 1,
        limit: 5,
        order: 'ASC',
        size: 'full',
        mime_types: 'gif',
      },
    });
  });

  it('getCatById returns data and calls by-id endpoint', async () => {
    const payload = { id: 'cat-42', url: 'u42', width: 500, height: 500 };
    getMock.mockResolvedValueOnce({ data: payload });

    const result = await getCatById('cat-42');

    expect(result).toEqual(payload);
    expect(getMock).toHaveBeenCalledWith(API_ENDPOINTS.CATS.IMAGES.byId('cat-42'));
  });
});
