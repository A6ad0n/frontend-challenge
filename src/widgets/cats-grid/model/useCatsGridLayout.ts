import { CARD_ASPECT_RATIO, GRID_GAP, MIN_CARD_WIDTH } from '../config/config';

export const useCatsGridLayout = (viewportWidth: number, itemCount: number) => {
  const columnCount = Math.max(
    1,
    Math.floor((viewportWidth + GRID_GAP) / (MIN_CARD_WIDTH + GRID_GAP))
  );

  const rowCount = Math.ceil(itemCount / columnCount);

  const columnWidth = Math.max(
    MIN_CARD_WIDTH,
    Math.floor((viewportWidth - GRID_GAP * (columnCount - 1)) / columnCount)
  );

  const rowHeight = columnWidth * CARD_ASPECT_RATIO;
  const viewportHeight = Math.min(980, Math.max(460, rowCount * rowHeight));

  return {
    columnCount,
    rowCount,
    columnWidth,
    rowHeight: rowHeight,
    viewportHeight,
  };
};
