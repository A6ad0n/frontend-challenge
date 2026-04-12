import styles from './CatCard.module.css';
import { useState, type ReactNode } from 'react';
import type { Cat } from '../types/cat';
import { CatCardMedia } from './CatCardMedia';
import { classNames } from '@/shared/lib/className';

interface CatCardProps {
  cat: Cat;
  action?: ReactNode;
  shouldLoadImage?: boolean;
  asListItem?: boolean;
}

export const CatCard = ({
  cat,
  action,
  shouldLoadImage = true,
  asListItem = false,
}: CatCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <article className={styles.card} role={asListItem ? 'listitem' : undefined}>
      <div className={styles.imageWrap}>
        <CatCardMedia
          key={cat.id}
          title="cat"
          imageSrc={cat.url}
          isImageLoaded={isImageLoaded}
          onImageLoad={() => setIsImageLoaded(true)}
          shouldLoadImage={shouldLoadImage}
        />
        <div className={classNames(styles.like, isImageLoaded && styles.likeVisible)}>{action}</div>
      </div>
    </article>
  );
};
