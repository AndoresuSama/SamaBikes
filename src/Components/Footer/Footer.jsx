import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.logo}>SamaBikes</span>
          <p>Tu destino de motocicletas.</p>
        </div>
        <div className={styles.contact}>
          <p className={styles.contactTitle}>Contacto</p>
          <a className={styles.link} href="mailto:aaeg3006+samabikes@gmail.com">contacto@samabikes.com</a>
          <a className={styles.link} href="https://www.instagram.com" target="_blank" rel="noreferrer">@samabikes</a>
        </div>
      </div>
      <p className={styles.copy}>&copy; 2026 SamaBikes. Todos los derechos reservados.</p>
    </footer>
  );
};
