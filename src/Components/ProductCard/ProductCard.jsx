import React from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = ({ image, name, price }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
        <button type="button" className={styles.button}>
          Ver producto
        </button>
      </div>
    </article>
  );
};
