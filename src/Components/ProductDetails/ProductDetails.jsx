import { useCart } from '../../hooks/useCart';
import styles from './ProductDetails.module.css';

const {
  details,
  backButton,
  card,
  image,
  info,
  title,
  price,
  description,
  cartActions,
  addButton,
  quantityControl,
  quantityButton,
  quantityLabel,
  meta,
} = styles;

export const ProductDetails = ({ product, onBack }) => {
  const { addToCart, removeFromCart, getQuantity } = useCart();
  const quantity = getQuantity(product.id);

  if (!product) {
    return null;
  }

  return (
    <section className={details}>
      <button type="button" className={backButton} onClick={onBack}>
        Volver
      </button>
      <div className={card}>
        <div className={image} style={{ backgroundImage: `url(${product.image})` }} />
        <div className={info}>
          <h2 className={title}>{product.name}</h2>
          <p className={price}>{product.price}</p>
          <p className={description}>
            {product.description ||
              'Esta es la vista detallada del producto. Aquí podrás ver más información sobre especificaciones, características y recomendaciones de uso.'}
          </p>
          <div className={cartActions}>
            {quantity === 0 ? (
              <button type="button" className={addButton} onClick={() => addToCart(product)}>
                Añadir al carrito
              </button>
            ) : (
              <div className={quantityControl}>
                <button
                  type="button"
                  className={quantityButton}
                  onClick={() => removeFromCart(product.id)}
                  aria-label="Quitar unidad"
                >
                  −
                </button>
                <span className={quantityLabel}>{quantity}</span>
                <button
                  type="button"
                  className={quantityButton}
                  onClick={() => addToCart(product)}
                  aria-label="Agregar unidad"
                >
                  +
                </button>
              </div>
            )}
          </div>
          <div className={meta}>
            <span>Disponible para prueba</span>
            <span>Envío rápido</span>
          </div>
        </div>
      </div>
    </section>
  );
};
