import React from 'react';
import styles from './ProductDetails.module.css';

export const ProductDetails = ({ product, onBack }) => {
  if (!product) {
    return null;
  }

  return (
    <section className={styles.details}>
      <button type="button" className={styles.backButton} onClick={onBack}>
        Volver
      </button>
      <div className={styles.card}>
        <div className={styles.image} style={{ backgroundImage: `url(${product.image})` }} />
        <div className={styles.info}>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.description}>
            Esta es la vista detallada del producto. Aquí podrás ver más información sobre especificaciones,
            características y recomendaciones de uso.
          </p>
          <div className={styles.meta}>
            <span>Disponible para prueba</span>
            <span>Envío rápido</span>
          </div>
        </div>
      </div>
    </section>
  );
};
