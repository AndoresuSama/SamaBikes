import React, { useState } from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = ({ image, name, price, onAddToCart, onRemoveFromCart, onSelect }) => {
  const [favorite, setFavorite] = useState(false);
  const [count, setCount] = useState(0);

  const handleFavorite = (event) => {
    event.stopPropagation();
    setFavorite((current) => !current);
  };

  const increment = (event) => {
    event.stopPropagation();
    setCount(count + 1);
    if (onAddToCart) {
      onAddToCart();
    }
  };

  const decrement = (event) => {
    event.stopPropagation();
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
    if (onRemoveFromCart) {
      onRemoveFromCart();
    }
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <article
      className={styles.card}
      onClick={handleSelect}
      role="button"
      tabIndex={0}
      onKeyPress={(event) => event.key === 'Enter' && handleSelect()}
    >
      <button
        type="button"
        className={`${styles.favoriteButton} ${favorite ? styles.favoriteActive : ''}`}
        onClick={handleFavorite}
        aria-label={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {favorite ? '★' : '☆'}
      </button>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
        <div className={styles.actions}>
          {count === 0 ? (
            <button type="button" className={styles.cartButton} onClick={increment}>
              Añadir al carrito
            </button>
          ) : (
            <div className={styles.quantityControl} onClick={(event) => event.stopPropagation()}>
              <button type="button" className={styles.quantityButton} onClick={decrement} aria-label="Quitar unidad">
                −
              </button>
              <span className={styles.quantityLabel}>{count}</span>
              <button type="button" className={styles.quantityButton} onClick={increment} aria-label="Agregar unidad">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
