import { useCallback, useRef } from 'react';
import type { CellsRange } from '../types/types';

export const useGridInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  onEndReached,
  rowCount,
}: {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onEndReached?: () => void;
  rowCount: number;
}) => {
  const lastRequestedRowRef = useRef(-1);

  return useCallback(
    (visible: CellsRange, all: CellsRange) => {
      if (!onEndReached || !hasNextPage || isFetchingNextPage) return;

      const triggerRow = Math.max(0, rowCount - 2);

      if (all.rowStopIndex < triggerRow) return;

      if (lastRequestedRowRef.current === rowCount) return;

      lastRequestedRowRef.current = rowCount;
      onEndReached();
    },
    [hasNextPage, isFetchingNextPage, onEndReached, rowCount]
  );
};
