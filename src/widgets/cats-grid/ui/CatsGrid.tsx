import type { Cat } from '@entities/cat';
import { CatCard, CatCardSkeleton } from '@entities/cat';
import styles from './CatsGrid.module.css';
import { ToggleFavoriteButton } from '@/features/toggle-favorite';

interface CatsGridProps {
  cats: Cat[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export const CatsGrid = ({ cats, isLoading = false, skeletonCount = 10 }: CatsGridProps) => {
  if (isLoading) {
    return (
      <>
        <div
          className={styles.grid}
          role="status"
          aria-live="polite"
          aria-label="Loading cat cards"
        >
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <CatCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
        <p className={styles.loading}>... загружаем еще котиков ...</p>
      </>
    );
  }

  return (
    <div
      className={styles.grid}
      role={cats.length > 0 ? 'list' : undefined}
      aria-label={cats.length > 0 ? 'Cats grid' : undefined}
    >
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
          asListItem
          action={<ToggleFavoriteButton catId={cat.id} />}
        />
      ))}
    </div>
  );
};
