import { classNames } from '@/shared/lib/className';
import styles from './CatCard.module.css';

interface CatCardMediaProps {
  imageSrc: string;
  title: string;
  isImageLoaded: boolean;
  onImageLoad: () => void;
}

export const CatCardMedia = ({
  imageSrc,
  title,
  isImageLoaded,
  onImageLoad,
}: CatCardMediaProps) => {
  return (
    <>
      {!isImageLoaded && <div className={styles.skeletonImage} aria-hidden="true" />}
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        decoding="async"
        onLoad={onImageLoad}
        className={classNames(styles.image, isImageLoaded && styles.imageLoaded)}
      />
    </>
  );
};
