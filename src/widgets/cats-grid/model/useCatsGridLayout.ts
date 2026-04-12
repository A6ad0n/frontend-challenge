import { CARD_ASPECT_RATIO, DEFAULT_GRID_GAP, MIN_CARD_WIDTH } from '../config/config';

export const useCatsGridLayout = (viewportWidth: number, itemCount: number) => {
  const columnCount = Math.max(
    1,
    Math.floor((viewportWidth + DEFAULT_GRID_GAP) / (MIN_CARD_WIDTH + DEFAULT_GRID_GAP))
  );

  const rowCount = Math.ceil(itemCount / columnCount);

  const columnWidth = Math.floor(viewportWidth / columnCount);

  const rowHeight = columnWidth * CARD_ASPECT_RATIO;
  const viewportHeight = Math.min(980, Math.max(460, rowCount * rowHeight));

  return {
    columnCount,
    rowCount,
    columnWidth,
    rowHeight,
    viewportHeight,
  };
};
