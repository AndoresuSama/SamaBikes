import { useEffect, useMemo, useState } from 'react';
import { fetchProducts, findProductById, getAllProducts } from '../services/productsService';

export function useProducts() {
  const [products, setProducts] = useState({ bikes: [], equipment: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const data = await fetchProducts();

        if (isMounted) {
          setProducts(data);
          setError(null);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || 'Error al cargar el catálogo.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const allProducts = useMemo(() => getAllProducts(products), [products]);

  return {
    products,
    bikes: products.bikes,
    equipment: products.equipment,
    allProducts,
    loading,
    error,
  };
}

export function useProductById(productId) {
  const { products, allProducts, loading, error } = useProducts();

  const product = useMemo(
    () => (productId ? findProductById(products, productId) : null),
    [productId, products],
  );

  return { product, allProducts, loading, error };
}
