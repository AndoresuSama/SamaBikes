import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h1 className={styles.title}>SamaBikes</h1>
          <p className={styles.subtitle}>Tu destino de motocicletas</p>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
