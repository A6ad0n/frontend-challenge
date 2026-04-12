import { type Cat, CatCard, CatCardSkeleton } from '@/entities/cat';
import { useFavoriteCatsStore } from '@/features/toggle-favorite';
import { ToggleFavoriteButton } from '@/features/toggle-favorite';
import type { CellComponentProps } from 'react-window';
import styles from './CatsGrid.module.css';

interface GridItemData {
  cats: Cat[];
  columnCount: number;
  visibleRowStart: number;
  visibleRowStop: number;
}

export const Cell = ({
  columnIndex,
  rowIndex,
  style,
  cats,
  columnCount,
  visibleRowStart,
  visibleRowStop,
}: CellComponentProps<GridItemData>) => {
  const toggleFavorite = useFavoriteCatsStore((state) => state.toggleFavorite);
  const index = rowIndex * columnCount + columnIndex;
  const cat = cats[index];
  const shouldLoadImage = rowIndex >= visibleRowStart - 1 && rowIndex <= visibleRowStop + 1;
  const shouldPrioritizeImage = rowIndex <= visibleRowStart;

  if (!cat) {
    return (
      <div
        style={style}
        className={styles.virtualizedCell}
        role="gridcell"
        aria-colindex={columnIndex + 1}
      >
        <div role="status" aria-live="polite" aria-label="Loading cat cards">
          <CatCardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div
      style={style}
      className={styles.virtualizedCell}
      role="gridcell"
      aria-colindex={columnIndex + 1}
    >
      <CatCard
        cat={cat}
        shouldLoadImage={shouldLoadImage}
        shouldPrioritizeImage={shouldPrioritizeImage}
        onDoubleTap={() => toggleFavorite(cat.id)}
        action={<ToggleFavoriteButton catId={cat.id} />}
      />
    </div>
  );
};
