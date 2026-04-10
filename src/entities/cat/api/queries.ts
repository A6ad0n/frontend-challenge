import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import type { Cat, GetCatsParams } from '../types/cat';
import { CATS_API_CONFIG } from '@/shared/config/cats';
import { getCatById, getCats } from './catApi';

export const useCatsInfiniteQuery = (additionalParams?: Omit<GetCatsParams, 'page' | 'limit'>) =>
  useInfiniteQuery({
    queryKey: ['cats', 'infinite'],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      getCats({
        page: pageParam,
        limit: CATS_API_CONFIG.DEFAULT_LIMIT,
        ...additionalParams,
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < CATS_API_CONFIG.DEFAULT_LIMIT ? undefined : allPages.length,
  });

export const useCatByIdQuery = (id: string) =>
  useQuery<Cat, Error>({
    queryKey: ['cat', id],
    queryFn: () => getCatById(id),
    enabled: Boolean(id),
  });
