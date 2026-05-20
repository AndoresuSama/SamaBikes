import React, { useEffect, useState } from 'react';
import { MainList } from './MainList';
import styles from './MainList.module.css';

export const MainListContainer = ({ onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  const [products, setProducts] = useState({ bikes: [], equipment: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar los productos destacados.');
        }
        const data = await response.json();
        setProducts(data || { bikes: [], equipment: [] });
      } catch (fetchError) {
        setError(fetchError.message || 'Error al cargar los productos destacados.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div className={styles.status}>Cargando destacados...</div>;
  }

  if (error) {
    return <div className={styles.statusError}>{error}</div>;
  }

  return (
    <MainList
      bikes={products.bikes.slice(0, 3)}
      equipment={products.equipment.slice(0, 3)}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
      onSelectProduct={onSelectProduct}
    />
  );
};
