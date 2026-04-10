import styles from './App.module.css';
import { AppRouter } from './app/router';
import { Header } from './widgets/header';

const App = () => {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
