export const ROUTES = {
  HOME: '/',
  BIKES: '/motos',
  EQUIPMENT: '/equipamiento',
  CONTACT: '/contacto',
  CART: '/carrito',
  PRODUCT: '/producto/:id',
};

export function productDetailPath(id) {
  return `/producto/${id}`;
}
