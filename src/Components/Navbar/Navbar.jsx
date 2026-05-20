import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav className={styles.navbar}>
      <ul id="main-navigation" className={styles.list}>
        <li className={styles.item}>Inicio</li>
        <li className={styles.item}>Motos</li>
        <li className={styles.item}>Equipamento</li>
        <li className={styles.item}>Contacto</li>
        <li className={styles.cartItem}>
          <button type="button" className={styles.cartButton} aria-label="Ver carrito">
            <span className={styles.cartIcon}>🛒</span>
            <span className={styles.cartCount}>{cartCount}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
