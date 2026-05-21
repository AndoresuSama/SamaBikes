import { ProductCard } from '../../Components/ProductCard/ProductCard';
import styles from './MainList.module.css';

const { mainList, section, sectionHeader, sectionTitle, sectionText, gallery } = styles;

export const MainList = ({ bikes, equipment }) => {
  return (
    <div className={mainList}>
      <section className={section}>
        <div className={sectionHeader}>
          <h3 className={sectionTitle}>Motos destacadas</h3>
          <p className={sectionText}>Una selección de nuestras mejores motos para iniciar tu viaje.</p>
        </div>
        <div className={gallery}>
          {bikes.map((bike) => (
            <ProductCard key={bike.id} product={bike} />
          ))}
        </div>
      </section>

      <section className={section}>
        <div className={sectionHeader}>
          <h3 className={sectionTitle}>Equipamento destacado</h3>
          <p className={sectionText}>Accesorios clave seleccionados para complementar tu moto.</p>
        </div>
        <div className={gallery}>
          {equipment.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
