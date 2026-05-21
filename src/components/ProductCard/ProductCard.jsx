import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productDetailPath } from '../../utils/routes';
import { useCart } from '../../hooks/useCart';
import styles from './ProductCard.module.css';

const {
  card,
  favoriteButton,
  favoriteActive,
  image,
  info,
  name,
  price,
  actions,
  cartButton,
  quantityControl,
  quantityButton,
  quantityLabel,
} = styles;

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, getQuantity } = useCart();
  const [favorite, setFavorite] = useState(false);
  const quantity = getQuantity(product.id);

  const handleFavorite = (event) => {
    event.stopPropagation();
    setFavorite((current) => !current);
  };

  const increment = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  const decrement = (event) => {
    event.stopPropagation();
    if (quantity <= 0) {
      return;
    }
    removeFromCart(product.id);
  };

  const handleSelect = () => {
    navigate(productDetailPath(product.id));
  };

  return (
    <article
      className={card}
      onClick={handleSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => event.key === 'Enter' && handleSelect()}
    >
      <button
        type="button"
        className={`${favoriteButton} ${favorite ? favoriteActive : ''}`}
        onClick={handleFavorite}
        aria-label={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {favorite ? '★' : '☆'}
      </button>
      <div className={image} style={{ backgroundImage: `url(${product.image})` }} />
      <div className={info}>
        <h3 className={name}>{product.name}</h3>
        <p className={price}>{product.price}</p>
        <div className={actions}>
          {quantity === 0 ? (
            <button type="button" className={cartButton} onClick={increment}>
              Añadir al carrito
            </button>
          ) : (
            <div className={quantityControl} onClick={(event) => event.stopPropagation()}>
              <button type="button" className={quantityButton} onClick={decrement} aria-label="Quitar unidad">
                −
              </button>
              <span className={quantityLabel}>{quantity}</span>
              <button type="button" className={quantityButton} onClick={increment} aria-label="Agregar unidad">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
