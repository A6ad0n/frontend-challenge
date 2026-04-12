import { CatCardSkeleton } from '@/entities/cat';
import { useRef } from 'react';
import { useCatsGridLayout } from '../model/useCatsGridLayout';
import { useViewportWidth } from '../model/useViewportWidth';
import styles from './CatsGrid.module.css';

interface LoadingCatsGridProps {
  skeletonCount: number;
}

export const LoadingCatsGrid = ({ skeletonCount }: LoadingCatsGridProps) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const viewportWidth = useViewportWidth(viewportRef);
  const { columnCount, columnWidth, rowHeight } = useCatsGridLayout(viewportWidth, skeletonCount);
  const loadingGridStyle = {
    gridTemplateColumns: viewportWidth > 0 ? `repeat(${columnCount}, ${columnWidth}px)` : undefined,
    gridAutoRows: viewportWidth > 0 ? `${rowHeight}px` : undefined,
    columnGap: 0,
    rowGap: 0,
    padding: 0,
    justifyContent: 'start',
    alignContent: 'start',
  };

  return (
    <>
      <div
        ref={viewportRef}
        className={`${styles.grid} ${styles.virtualizedViewport}`}
        style={loadingGridStyle}
        role="status"
        aria-live="polite"
        aria-label="Loading cat cards"
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
};
