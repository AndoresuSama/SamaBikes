import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.css';

const { header, inner, brand, title, subtitle } = styles;

export const Header = () => {
  return (
    <header className={header}>
      <div className={inner}>
        <Link to={ROUTES.HOME} className={brand}>
          <h1 className={title}>SamaBikes</h1>
          <p className={subtitle}>Tu destino de motocicletas</p>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
