import styles from './CatCard.module.css';
import { useState, type ReactNode } from 'react';
import type { Cat } from '../types/cat';
import { CatCardMedia } from './CatCardMedia';
import { classNames } from '@/shared/lib/className';

interface CatCardProps {
  cat: Cat;
  action?: ReactNode;
}

export const CatCard = ({ cat, action }: CatCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <article className={styles.card} role="listitem">
      <div className={styles.imageWrap}>
        <CatCardMedia
          key={cat.id}
          title="cat"
          imageSrc={cat.url}
          isImageLoaded
          onImageLoad={() => setIsImageLoaded(true)}
        />
        <div className={classNames(styles.like, isImageLoaded && styles.likeVisible)}>{action}</div>
      </div>
    </article>
  );
};
