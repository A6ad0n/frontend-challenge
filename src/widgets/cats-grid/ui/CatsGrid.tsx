import type { Cat } from '@entities/cat';
import { CatCard } from '@entities/cat';
import styles from './CatsGrid.module.css';
import { ToggleFavoriteButton } from '@/features/toggle-favorite';
import { LoadingCatsGrid } from './LoadingCatsGrid';

interface CatsGridProps {
  cats: Cat[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export const CatsGrid = ({ cats, isLoading = false, skeletonCount = 10 }: CatsGridProps) => {
  if (isLoading) {
    return <LoadingCatsGrid skeletonCount={skeletonCount} />;
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
