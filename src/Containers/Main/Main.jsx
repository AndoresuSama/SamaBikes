import React from 'react';
import styles from './Main.module.css';
import { BikesListContainer } from '../Bikes/BikesListContainer';
import { EquipmentListContainer } from '../Equipment/EquipmentListContainer';

export const Main = ({ children, onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {children ? (
          children
        ) : (
          <section className={styles.featuredSection}>
            <div className={styles.featuredHeader}>
              <h2 className={styles.featuredTitle}>Destacados</h2>
              <p className={styles.featuredDescription}>
                Elige entre las mejores motos y el equipamento que no puede faltar en tu ruta.
              </p>
            </div>
            <BikesListContainer onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} onSelectProduct={onSelectProduct} />
            <EquipmentListContainer onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} onSelectProduct={onSelectProduct} />
          </section>
        )}
      </div>
    </main>
  );
};
