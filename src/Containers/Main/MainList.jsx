import { ProductCard } from '../../Components/ProductCard/ProductCard';
import styles from './MainList.module.css';

export const MainList = ({ bikes, equipment, onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  return (
    <div className={styles.mainList}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Motos destacadas</h3>
          <p className={styles.sectionText}>Una selección de nuestras mejores motos para iniciar tu viaje.</p>
        </div>
        <div className={styles.gallery}>
          {bikes.map((bike) => (
            <ProductCard
              key={bike.id}
              name={bike.name}
              price={bike.price}
              image={bike.image}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
              onSelect={() => onSelectProduct(bike)}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Equipamento destacado</h3>
          <p className={styles.sectionText}>Accesorios clave seleccionados para complementar tu moto.</p>
        </div>
        <div className={styles.gallery}>
          {equipment.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
              onSelect={() => onSelectProduct(item)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
