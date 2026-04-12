import { useRef } from 'react';
import type { Cat } from '@entities/cat';
import { CatCard, CatCardSkeleton } from '@entities/cat';
import { useFavoriteCatsStore } from '@/features/toggle-favorite';
import { useCatsGridLayout } from '../model/useCatsGridLayout';
import { useViewportWidth } from '../model/useViewportWidth';
import styles from './CatsGrid.module.css';
import { ToggleFavoriteButton } from '@/features/toggle-favorite';
import { classNames } from '@/shared/lib/className';

interface CatsGridProps {
  cats: Cat[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export const CatsGrid = ({ cats, isLoading = false, skeletonCount = 15 }: CatsGridProps) => {
  const toggleFavorite = useFavoriteCatsStore((state) => state.toggleFavorite);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const viewportWidth = useViewportWidth(viewportRef);
  const { columnCount, rowHeight } = useCatsGridLayout(viewportWidth, skeletonCount);

  const gridStyle = {
    gridTemplateColumns: viewportWidth > 0 ? `repeat(${columnCount}, minmax(0, 1fr))` : undefined,
  };

  if (isLoading) {
    return (
      <>
        <div
          ref={viewportRef}
          className={classNames(styles.grid, styles.virtualizedViewport)}
          style={{
            ...gridStyle,
            gridAutoRows: viewportWidth > 0 ? `${rowHeight}px` : undefined,
            columnGap: 0,
            rowGap: 0,
            padding: 0,
            justifyContent: 'start',
            alignContent: 'start',
          }}
          role="status"
          aria-live="polite"
          aria-label="Загружаем карточки котиков"
        >
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div key={`skeleton-${index}`} className={styles.virtualizedCell}>
              <CatCardSkeleton />
            </div>
          ))}
        </div>
        <p className={styles.loading}>... загружаем еще котиков ...</p>
      </>
    );
  }

  return (
    <div
      ref={viewportRef}
      className={styles.grid}
      style={{
        ...gridStyle,
        gridAutoRows: viewportWidth > 0 ? `${rowHeight}px` : undefined,
        columnGap: 0,
        rowGap: 0,
        padding: 0,
        justifyContent: 'start',
        alignContent: 'start',
      }}
      role={cats.length > 0 ? 'list' : undefined}
      aria-label={cats.length > 0 ? 'Сетка с котиками' : undefined}
    >
      {cats.map((cat) => (
        <div key={cat.id} className={styles.virtualizedCell}>
          <CatCard
            key={cat.id}
            cat={cat}
            asListItem
            onDoubleTap={() => toggleFavorite(cat.id)}
            action={<ToggleFavoriteButton catId={cat.id} />}
          />
        </div>
      ))}
    </div>
  );
};
