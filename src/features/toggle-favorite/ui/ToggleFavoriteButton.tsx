import { useState } from 'react';
import { useFavoriteCatsStore } from '../model/useFavoriteCatsStore';
import styles from './ToggleFavoriteButton.module.css';
import HeartOutline from '@/shared/assets/heart-outline.svg?react';
import HeartFilled from '@/shared/assets/heart-filled.svg?react';

interface ToggleFavoriteButtonProps {
  catId: string;
}

export const ToggleFavoriteButton = ({ catId }: ToggleFavoriteButtonProps) => {
  const toggleFavorite = useFavoriteCatsStore((state) => state.toggleFavorite);
  const isFavorite = useFavoriteCatsStore((state) => state.isFavorite(catId));

  const [isHover, setIsHover] = useState(false);

  const showFilled = isFavorite ? !isHover : isHover;

  const handleClick = () => {
    toggleFavorite(catId);
    setIsHover(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onTouchEnd={(event) => event.stopPropagation()}
      onDoubleClick={(event) => event.stopPropagation()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.button}
      aria-label={isFavorite ? 'Remove cat from favorites' : 'Add cat to favorites'}
      aria-pressed={isFavorite}
    >
      {showFilled ? (
        <HeartFilled className={styles.heart} />
      ) : (
        <HeartOutline className={styles.heart} />
      )}
    </button>
  );
};
