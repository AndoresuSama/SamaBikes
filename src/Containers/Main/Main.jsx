import React from 'react';
import styles from './Main.module.css';
import { MainListContainer } from './MainListContainer';
import { Contact } from '../Contact/Contact';

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
            <MainListContainer onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} onSelectProduct={onSelectProduct} />
            <Contact />
          </section>
        )}
      </div>
    </main>
  );
};
