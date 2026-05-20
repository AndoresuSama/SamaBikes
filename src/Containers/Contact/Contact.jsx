import React, { useEffect, useState } from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const response = await fetch('/data/people.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el equipo de ventas.');
        }
        const people = await response.json();
        setTeam(people);
      } catch (fetchError) {
        setError(fetchError.message || 'Error al cargar asesores.');
      } finally {
        setLoading(false);
      }
    };

    loadTeam();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>Contacto</h2>
        <p>¿Listo para tu próxima moto? Hablemos de financiamiento, pruebas de ruta y accesorios personalizados.</p>
      </div>
      <div className={styles.contactGrid}>
        <div className={styles.card}>
          <strong>Ubicación:</strong>
          <p>Av. Ruta 66 1234, Ciudad.</p>
        </div>
        <div className={styles.card}>
          <strong>Asesores de atención</strong>
          {loading ? (
            <p>Cargando asesores...</p>
          ) : error ? (
            <p className={styles.error}>{error}</p>
          ) : (
            team.map((person) => (
              <div key={person.id} className={styles.person}>
                <p className={styles.personName}>{person.name}</p>
                <p className={styles.personRole}>{person.role}</p>
                <a className={styles.personLink} href={`mailto:${person.email}`}>{person.email}</a>
                <a className={styles.personLink} href={`tel:${person.phone}`}>{person.phone}</a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
