import { Link } from 'react-router-dom';
import { ROUTES } from '@app/router';
import { useFavoriteCatsStore } from '@features/toggle-favorite';
import styles from './FavoriteCatsPage.module.css';
import { useCatsByIdsQuery } from '@/entities/cat/api';
import { CatsGrid } from '@/widgets/cats-grid';

export const FavoriteCatsPage = () => {
  const favoriteIds = useFavoriteCatsStore((state) => state.favoriteIds);

  const { data, isLoading } = useCatsByIdsQuery(favoriteIds);

  return (
    <section className={styles.section}>
      <div className={styles.viewport}>
        <CatsGrid cats={data || []} isLoading={isLoading} skeletonCount={favoriteIds.length} />
        {!isLoading && data?.length === 0 && (
          <div className={styles.emptyState} role="status" aria-live="polite">
            <p className={styles.emptyText}>Сохраняйте котиков и они будут появляться здесь.</p>
            <Link to={ROUTES.cats} className={styles.emptyCta}>
              Смотреть котиков
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
