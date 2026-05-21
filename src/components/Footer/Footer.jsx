import { useEffect, useState } from 'react';
import { PEOPLE_JSON_URL } from '../../utils/catalog';
import styles from './Footer.module.css';

const {
  footer,
  content,
  brand,
  logo,
  contact,
  contactTitle,
  link,
  teamSection,
  teamTitle,
  teamGrid,
  teamCard,
  personName,
  personRole,
  personLink,
  copy,
} = styles;

export const Footer = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const response = await fetch(PEOPLE_JSON_URL);
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
    <footer className={footer}>
      <div className={content}>
        <div className={brand}>
          <span className={logo}>SamaBikes</span>
          <p>Tu destino de motocicletas.</p>
        </div>
        <div className={contact}>
          <p className={contactTitle}>Contacto</p>
          <a className={link} href="mailto:contacto@samabikes.com">
            contacto@samabikes.com
          </a>
          <a className={link} href="https://www.instagram.com" target="_blank" rel="noreferrer">
            @samabikes
          </a>
        </div>
      </div>

      <div className={teamSection}>
        <h4 className={teamTitle}>Nuestros asesores</h4>
        <div className={teamGrid}>
          {people.map((person) => (
            <div key={person.id} className={teamCard}>
              <p className={personName}>{person.name}</p>
              <p className={personRole}>{person.role}</p>
              <a className={personLink} href={`mailto:${person.email}`}>
                {person.email}
              </a>
              <a className={personLink} href={`tel:${person.phone}`}>
                {person.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      <p className={copy}>&copy; 2026 SamaBikes. Todos los derechos reservados.</p>
    </footer>
  );
};
