import React from 'react';
import styles from './Main.module.css';

export const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>{children ? children : <p>Bienvenido a SamaBikes. Explora nuestra colección de motos y equipamento.</p>}</div>
    </main>
  );
};
