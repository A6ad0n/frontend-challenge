import { useCallback } from 'react';
import { useCatsInfiniteQuery } from '@entities/cat';
import { CatsGrid, VirtualizedCatsGrid } from '@widgets/cats-grid';
import styles from './AllCatsPage.module.css';

export const AllCatsPage = () => {
  const { data, isPending, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCatsInfiniteQuery();

  const cats = data?.pages.flat() ?? [];

  const handleIntersect = useCallback(() => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isPending) {
    return (
      <section className={styles.section}>
        <CatsGrid cats={[]} isLoading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className={styles.section}>
        <p className={styles.empty} role="alert">
          Не удалость загрузить котиков{error ? `: ${error?.message}` : ''}
        </p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <VirtualizedCatsGrid
        cats={cats}
        hasNextPage={Boolean(hasNextPage)}
        isFetchingNextPage={isFetchingNextPage}
        onEndReached={handleIntersect}
      />
      {isFetchingNextPage && (
        <p className={styles.status} role="status" aria-live="polite">
          ... загружаем еще котиков ...
        </p>
      )}
      {!hasNextPage && cats.length > 0 && (
        <p className={styles.status}>Больше нету котиков для просмотра.</p>
      )}
    </section>
  );
};
