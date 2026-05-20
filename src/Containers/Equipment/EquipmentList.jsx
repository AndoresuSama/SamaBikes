import { ProductCard } from '../../Components/ProductCard/ProductCard';
import styles from './EquipmentList.module.css';

export const EquipmentList = ({ items, onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  return (
    <div className={styles.featuredBlock}>
      <div className={styles.sectionHeader}>
        <h3>Equipamento</h3>
        <p>Accesorios y protecciones clave para cada viaje en moto.</p>
      </div>
      <div className={styles.gallery}>
        {items.map((item) => (
          <ProductCard
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            onSelect={() => onSelectProduct(item)}
          />
        ))}
      </div>
    </div>
  );
};
