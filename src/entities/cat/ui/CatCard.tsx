import styles from './CatCard.module.css';
import { useRef, useState, type ReactNode } from 'react';
import type { Cat } from '../types/cat';
import { CatCardMedia } from './CatCardMedia';
import { classNames } from '@/shared/lib/className';

interface CatCardProps {
  cat: Cat;
  action?: ReactNode;
  shouldLoadImage?: boolean;
  shouldPrioritizeImage?: boolean;
  asListItem?: boolean;
  onDoubleTap?: () => void;
}

export const CatCard = ({
  cat,
  action,
  shouldLoadImage = true,
  shouldPrioritizeImage = false,
  asListItem = false,
  onDoubleTap,
}: CatCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const lastTapTimeRef = useRef(0);

  const handleTouchEnd = () => {
    if (!onDoubleTap) {
      return;
    }

    const currentTime = Date.now();
    const wasDoubleTap = currentTime - lastTapTimeRef.current < 300;

    lastTapTimeRef.current = currentTime;

    if (wasDoubleTap) {
      onDoubleTap();
      lastTapTimeRef.current = 0;
    }
  };

  return (
    <article className={styles.card} role={asListItem ? 'listitem' : undefined}>
      <div className={styles.imageWrap} onDoubleClick={onDoubleTap} onTouchEnd={handleTouchEnd}>
        <CatCardMedia
          key={cat.id}
          title="cat"
          imageSrc={cat.url}
          isImageLoaded={isImageLoaded}
          onImageLoad={() => setIsImageLoaded(true)}
          shouldLoadImage={shouldLoadImage}
          shouldPrioritizeImage={shouldPrioritizeImage}
        />
        <div className={classNames(styles.like, isImageLoaded && styles.likeVisible)}>{action}</div>
      </div>
    </article>
  );
};
