import { ProductCard } from '../../Components/ProductCard/ProductCard';
import styles from './BikesList.module.css';

export const BikesList = ({ bikes, onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  return (
    <div className={styles.featuredBlock}>
      <div className={styles.sectionHeader}>
        <h3>Motos</h3>
        <p>Las motos más potentes y versátiles para tomar la ciudad.</p>
      </div>
      <div className={styles.gallery}>
        {bikes.map((bike) => (
          <ProductCard
            key={bike.name}
            name={bike.name}
            price={bike.price}
            image={bike.image}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            onSelect={() => onSelectProduct(bike)}
          />
        ))}
      </div>
    </div>
  );
};
