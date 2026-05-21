import { PRODUCTS_JSON_URL } from '../utils/catalog';

let cachedProducts = null;
let productsRequest = null;

export async function fetchProducts() {
  if (cachedProducts) {
    return cachedProducts;
  }

  if (!productsRequest) {
    productsRequest = fetch(PRODUCTS_JSON_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el catálogo de productos.');
        }
        return response.json();
      })
      .then((data) => {
        cachedProducts = {
          bikes: data.bikes ?? [],
          equipment: data.equipment ?? [],
        };
        return cachedProducts;
      })
      .finally(() => {
        productsRequest = null;
      });
  }

  return productsRequest;
}

export function getAllProducts({ bikes, equipment }) {
  return [...bikes, ...equipment];
}

export function findProductById(products, id) {
  return getAllProducts(products).find((product) => product.id === id) ?? null;
}
