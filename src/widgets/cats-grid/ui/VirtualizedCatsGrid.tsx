import { useCallback, useMemo, useRef, useState } from 'react';
import { Grid } from 'react-window';
import { useGridInfiniteScroll } from '../model/useGridInfiniteScroll';
import { useViewportWidth } from '../model/useViewportWidth';
import { Cell } from './Cell';
import type { Cat } from '@/entities/cat';
import styles from './CatsGrid.module.css';
import { useCatsGridLayout } from '../model/useCatsGridLayout';
import type { CellsRange } from '../types/types';

interface VirtualizedCatsGridProps {
  cats: Cat[];
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onEndReached?: () => void;
}
export const VirtualizedCatsGrid = ({
  cats,
  hasNextPage = false,
  isFetchingNextPage = false,
  onEndReached,
}: VirtualizedCatsGridProps) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const viewportWidth = useViewportWidth(viewportRef);

  const { columnCount, rowCount, columnWidth, rowHeight, viewportHeight } = useCatsGridLayout(
    viewportWidth,
    cats.length
  );

  const [visibleRows, setVisibleRows] = useState({ start: 0, stop: 0 });

  const handleInfiniteScroll = useGridInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    onEndReached,
    rowCount,
  });

  const handleItemsRendered = useCallback(
    (visibleCells: CellsRange, allCells: CellsRange) => {
      setVisibleRows({
        start: visibleCells.rowStartIndex,
        stop: visibleCells.rowStopIndex,
      });

      handleInfiniteScroll(visibleCells, allCells);
    },
    [handleInfiniteScroll]
  );

  const items = useMemo(() => {
    if (!isFetchingNextPage) return cats;

    return [...cats, ...Array(columnCount * 3).fill(null)];
  }, [cats, isFetchingNextPage, columnCount]);

  const gridData = useMemo(
    () => ({
      cats: items,
      columnCount,
      visibleRowStart: visibleRows.start,
      visibleRowStop: visibleRows.stop,
    }),
    [items, columnCount, visibleRows]
  );

  if (cats.length === 0) {
    return <p className={styles.empty}>Больше нет котиков.</p>;
  }

  return (
    <div ref={viewportRef} className={styles.virtualizedViewport}>
      {viewportWidth > 0 && (
        <Grid
          className={styles.virtualizedGrid}
          style={{ width: viewportWidth, height: viewportHeight }}
          rowCount={rowCount + 3}
          rowHeight={rowHeight}
          columnCount={columnCount}
          columnWidth={columnWidth}
          overscanCount={2}
          cellComponent={Cell}
          cellProps={gridData}
          onCellsRendered={handleItemsRendered}
        />
      )}
    </div>
  );
};
