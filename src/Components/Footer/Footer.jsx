import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const response = await fetch('/data/people.json');
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setPeople(data);
      } catch {
        // Silently fall back to contact defaults.
      }
    };

    loadPeople();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.logo}>SamaBikes</span>
          <p>Tu destino de motocicletas.</p>
        </div>
        <div className={styles.contact}>
          <p className={styles.contactTitle}>Contacto</p>
          <a className={styles.link} href="mailto:contacto@samabikes.com">contacto@samabikes.com</a>
          <a className={styles.link} href="https://www.instagram.com" target="_blank" rel="noreferrer">@samabikes</a>
        </div>
      </div>

      <div className={styles.teamSection}>
        <h4 className={styles.teamTitle}>Nuestros asesores</h4>
        <div className={styles.teamGrid}>
          {people.map((person) => (
            <div key={person.id} className={styles.teamCard}>
              <p className={styles.personName}>{person.name}</p>
              <p className={styles.personRole}>{person.role}</p>
              <a className={styles.personLink} href={`mailto:${person.email}`}>{person.email}</a>
              <a className={styles.personLink} href={`tel:${person.phone}`}>{person.phone}</a>
            </div>
          ))}
        </div>
      </div>

      <p className={styles.copy}>&copy; 2026 SamaBikes. Todos los derechos reservados.</p>
    </footer>
  );
};
