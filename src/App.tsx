import styles from './App.module.css';
import { AppRouter } from './app/router';

const App = () => {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
