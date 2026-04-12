import { classNames } from '@/shared/lib/className';
import styles from './CatCard.module.css';

interface CatCardMediaProps {
  imageSrc: string;
  title: string;
  isImageLoaded: boolean;
  onImageLoad: () => void;
  shouldLoadImage: boolean;
  shouldPrioritizeImage?: boolean;
}

export const CatCardMedia = ({
  imageSrc,
  title,
  isImageLoaded,
  onImageLoad,
  shouldLoadImage,
  shouldPrioritizeImage = false,
}: CatCardMediaProps) => {
  return (
    <>
      {!isImageLoaded && shouldLoadImage && (
        <div className={styles.skeletonImage} aria-hidden="true" />
      )}
      <img
        src={shouldLoadImage ? imageSrc : undefined}
        alt={title}
        loading={shouldPrioritizeImage ? 'eager' : 'lazy'}
        fetchPriority={shouldPrioritizeImage ? 'high' : 'low'}
        decoding="async"
        onLoad={onImageLoad}
        className={classNames(styles.image, isImageLoaded && styles.imageLoaded)}
      />
    </>
  );
};
