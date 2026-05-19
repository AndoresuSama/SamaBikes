import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>SamaBikes</h1>
      <p className={styles.subtitle}>Tu destino de motocicletas</p>
    </header>
  );
};
