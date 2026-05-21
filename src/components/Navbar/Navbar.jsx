import { NavLink, Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useCart } from '../../hooks/useCart';
import styles from './Navbar.module.css';

const { navbar, list, item, link, linkActive, cartItem, cartButton, cartIcon, cartCount } = styles;

const NAV_ITEMS = [
  { to: ROUTES.HOME, label: 'Inicio', end: true },
  { to: ROUTES.BIKES, label: 'Motos' },
  { to: ROUTES.EQUIPMENT, label: 'Equipamento' },
  { to: ROUTES.CONTACT, label: 'Contacto' },
];

export const Navbar = () => {
  const { totalCount } = useCart();

  return (
    <nav className={navbar}>
      <ul id="main-navigation" className={list}>
        {NAV_ITEMS.map(({ to, label, end }) => (
          <li key={to} className={item}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? `${link} ${linkActive}` : link)}
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li className={cartItem}>
          <Link to={ROUTES.CART} className={cartButton} aria-label="Ver carrito">
            <span className={cartIcon}>🛒</span>
            <span className={cartCount}>{totalCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
