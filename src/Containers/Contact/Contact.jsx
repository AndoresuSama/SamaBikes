import styles from './Contact.module.css';

export const Contact = () => {
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
          <strong>Contacto:</strong>
          <p>hola@samabikes.com</p>
          <p>+54 9 11 1234 5678</p>
        </div>
      </div>
    </section>
  );
};
