import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul id="main-navigation" className={styles.list}>
        <li className={styles.item}>Inicio</li>
        <li className={styles.item}>Motos</li>
        <li className={styles.item}>Equipamento</li>
        <li className={styles.item}>Contacto</li>
      </ul>
    </nav>
  );
};
