import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ROUTES, productDetailPath } from '../utils/routes';
import { PageSection } from '../Components/ui/PageSection/PageSection';
import styles from './CartPage.module.css';

const {
  empty,
  list,
  item,
  thumbnail,
  info,
  name,
  price,
  controls,
  quantityButton,
  quantity,
  footer,
  summary,
  clearButton,
} = styles;

export function CartPage() {
  const { items, totalCount, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <PageSection
      title="Carrito"
      description={
        totalCount > 0
          ? `Tenés ${totalCount} ${totalCount === 1 ? 'unidad' : 'unidades'} en tu carrito.`
          : 'Tu carrito está vacío. Explorá el catálogo y agregá tus favoritos.'
      }
    >
      {items.length === 0 ? (
        <div className={empty}>
          <p>No hay productos en el carrito todavía.</p>
          <Link to={ROUTES.HOME} className="btn">
            Ver destacados
          </Link>
        </div>
      ) : (
        <>
          <ul className={list}>
            {items.map(({ product, quantity: itemQuantity }) => (
              <li key={product.id} className={item}>
                <div
                  className={thumbnail}
                  style={{ backgroundImage: `url(${product.image})` }}
                  role="img"
                  aria-label={product.name}
                />
                <div className={info}>
                  <Link to={productDetailPath(product.id)} className={name}>
                    {product.name}
                  </Link>
                  <p className={price}>{product.price}</p>
                  <div className={controls}>
                    <button
                      type="button"
                      className={quantityButton}
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Quitar una unidad de ${product.name}`}
                    >
                      −
                    </button>
                    <span className={quantity}>{itemQuantity}</span>
                    <button
                      type="button"
                      className={quantityButton}
                      onClick={() => addToCart(product)}
                      aria-label={`Agregar una unidad de ${product.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={footer}>
            <p className={summary}>
              Total de unidades: <strong>{totalCount}</strong>
            </p>
            <button type="button" className={clearButton} onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </PageSection>
  );
}
