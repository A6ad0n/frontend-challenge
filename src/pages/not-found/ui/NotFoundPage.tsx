import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Страница не найдена</p>
        <p className={styles.description}>Котики на этом адресе не живут :(</p>
        <Link to={ROUTES.cats} className={styles.homeLink}>
          Вернуться к котикам
        </Link>
      </div>
    </div>
  );
};
