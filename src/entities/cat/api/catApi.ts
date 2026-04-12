import { catApiClient } from '@/shared/api';
import type { Cat, GetCatsParams } from '../types/cat';
import { API_ENDPOINTS } from './endpoints';
import { CATS_API_CONFIG } from '@/shared/config/cats';

export const getCats = async (params: GetCatsParams): Promise<Cat[]> => {
  const { data } = await catApiClient.get<Cat[]>(API_ENDPOINTS.CATS.SEARCH, {
    params: {
      page: params.page,
      limit: params.limit ?? CATS_API_CONFIG.DEFAULT_LIMIT,
      order: params.order ?? CATS_API_CONFIG.DEFAULT_ORDER,
      size: params.size ?? CATS_API_CONFIG.DEFAULT_SIZE,
    },
  });

  return data;
};

export const getCatById = async (id: string): Promise<Cat> => {
  const { data } = await catApiClient.get<Cat>(API_ENDPOINTS.CATS.IMAGES.byId(id));

  return data;
};
