import styles from './CatCard.module.css';

export const CatCardSkeleton = () => (
  <article className={styles.card} aria-hidden="true">
    <div className={styles.imageWrap}>
      <div className={styles.skeletonImage} />
    </div>
  </article>
);
