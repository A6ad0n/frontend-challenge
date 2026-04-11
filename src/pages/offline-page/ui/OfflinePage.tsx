import styles from './OfflinePage.module.css';

export const OfflinePage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Нет соединения</h1>
        <p className={styles.message}>Не удалось подключиться к интернету</p>
        <p className={styles.description}>Проверьте подключение к сети и попробуйте снова</p>
        <div className={styles.actions}>
          <button onClick={handleRetry} className={styles.retryButton}>
            Повторить попытку
          </button>
        </div>
      </div>
    </div>
  );
};
