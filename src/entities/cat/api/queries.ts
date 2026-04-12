import { useQuery, useInfiniteQuery, useQueries } from '@tanstack/react-query';
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

export const useCatsByIdsQuery = (ids: string[]) => {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['cat', id],
      queryFn: () => getCatById(id),
      enabled: Boolean(id) && ids.length > 0,
    })),
  });

  const data = results.map((result) => result.data).filter((cat): cat is Cat => cat !== undefined);

  const isPending = results.some((result) => result.isPending);
  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);
  const errors = results.filter((result) => result.error).map((result) => result.error);

  return {
    data,
    isPending,
    isLoading,
    isError,
    errors,
    results,
  };
};
