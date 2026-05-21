import { useEffect, useMemo, useState } from 'react';
import { fetchProducts, findProductById, getAllProducts } from '../services/productsService';
import { SIMULATED_DELAYS } from '../utils/catalog';
import { wait, withMinimumDelay } from '../utils/delay';

export function useProducts() {
  const [products, setProducts] = useState({ bikes: [], equipment: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const data = await withMinimumDelay(() => fetchProducts(), SIMULATED_DELAYS.PRODUCTS);

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
  const { products, loading: catalogLoading, error } = useProducts();
  const [readyId, setReadyId] = useState(null);

  const product = useMemo(
    () => (productId ? findProductById(products, productId) : null),
    [productId, products],
  );

  useEffect(() => {
    if (!productId || catalogLoading) {
      return undefined;
    }

    let isMounted = true;

    const prepareDetail = async () => {
      await wait(SIMULATED_DELAYS.PRODUCT_DETAIL);
      if (isMounted) {
        setReadyId(productId);
      }
    };

    prepareDetail();

    return () => {
      isMounted = false;
    };
  }, [productId, catalogLoading]);

  const loading = catalogLoading || readyId !== productId;

  return { product, loading, error };
}
