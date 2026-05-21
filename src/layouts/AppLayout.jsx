import { Outlet } from 'react-router-dom';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import styles from './AppLayout.module.css';

const { layout, main } = styles;

export function AppLayout() {
  return (
    <div className={layout}>
      <Header />
      <main className={main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
