import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';
import styles from './ProductGallerySkeleton.module.css';

const { gallery } = styles;

export function ProductGallerySkeleton({ count = 3 }) {
  return (
    <div className={gallery} aria-busy="true" aria-label="Cargando productos">
      {Array.from({ length: count }, (_, index) => (
        <ProductCardSkeleton key={`product-skeleton-${index}`} />
      ))}
    </div>
  );
}
