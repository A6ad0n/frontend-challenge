import { classNames } from '@/shared/lib/className';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/app/router';

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return classNames(styles.link, isActive && styles.activeLink);
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Основная навигация">
        <NavLink to={ROUTES.cats} className={getLinkClassName}>
          Все котики
        </NavLink>
        <NavLink to={ROUTES.favorites} className={getLinkClassName}>
          Любимые котики
        </NavLink>
      </nav>
    </header>
  );
};
