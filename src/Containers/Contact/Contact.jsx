import { ContactForm } from '../../components/ContactForm/ContactForm';
import { AdvisorSkeleton } from '../../components/ui/AdvisorSkeleton/AdvisorSkeleton';
import { usePeople } from '../../hooks/usePeople';
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

const ADVISOR_SKELETON_COUNT = 3;

export const Contact = () => {
  const { team, loading, error: loadError } = usePeople();

  return (
    <section className={section}>
      <div className={sectionHeader}>
        <h2>Contacto</h2>
        <p>¿Listo para tu próxima moto? Hablemos de financiamiento, pruebas de ruta y accesorios personalizados.</p>
      </div>

      <ContactForm />

      <div className={contactGrid}>
        <div className={card}>
          <strong>Ubicación:</strong>
          <p>Av. Ruta 66 1234, Ciudad.</p>
        </div>
        <div className={card}>
          <strong>Asesores de atención</strong>
          {loading ? (
            Array.from({ length: ADVISOR_SKELETON_COUNT }, (_, index) => (
              <AdvisorSkeleton key={`advisor-skeleton-${index}`} />
            ))
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
