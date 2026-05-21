import { useEffect, useState } from 'react';
import { PEOPLE_JSON_URL } from '../../utils/catalog';
import styles from './Contact.module.css';

const {
  section,
  sectionHeader,
  contactGrid,
  card,
  error,
  person,
  personName,
  personRole,
  personLink,
} = styles;

export const Contact = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const response = await fetch(PEOPLE_JSON_URL);
        if (!response.ok) {
          throw new Error('No se pudo cargar el equipo de ventas.');
        }
        const people = await response.json();
        setTeam(people);
      } catch (fetchError) {
        setLoadError(fetchError.message || 'Error al cargar asesores.');
      } finally {
        setLoading(false);
      }
    };

    loadTeam();
  }, []);

  return (
    <section className={section}>
      <div className={sectionHeader}>
        <h2>Contacto</h2>
        <p>¿Listo para tu próxima moto? Hablemos de financiamiento, pruebas de ruta y accesorios personalizados.</p>
      </div>
      <div className={contactGrid}>
        <div className={card}>
          <strong>Ubicación:</strong>
          <p>Av. Ruta 66 1234, Ciudad.</p>
        </div>
        <div className={card}>
          <strong>Asesores de atención</strong>
          {loading ? (
            <p>Cargando asesores...</p>
          ) : loadError ? (
            <p className={error}>{loadError}</p>
          ) : (
            team.map((member) => (
              <div key={member.id} className={person}>
                <p className={personName}>{member.name}</p>
                <p className={personRole}>{member.role}</p>
                <a className={personLink} href={`mailto:${member.email}`}>
                  {member.email}
                </a>
                <a className={personLink} href={`tel:${member.phone}`}>
                  {member.phone}
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
