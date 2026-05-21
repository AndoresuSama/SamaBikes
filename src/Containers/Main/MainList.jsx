import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductGallerySkeleton } from '../../components/ui/ProductGallerySkeleton/ProductGallerySkeleton';
import { FEATURED_LIMIT } from '../../utils/catalog';
import styles from './MainList.module.css';

const { mainList, section, sectionHeader, sectionTitle, sectionText, gallery } = styles;

export const MainList = ({ bikes, equipment, loading = false }) => {
  return (
    <div className={mainList}>
      <section className={section}>
        <div className={sectionHeader}>
          <h3 className={sectionTitle}>Motos destacadas</h3>
          <p className={sectionText}>Una selección de nuestras mejores motos para iniciar tu viaje.</p>
        </div>
        {loading ? (
          <ProductGallerySkeleton count={FEATURED_LIMIT} />
        ) : (
          <div className={gallery}>
            {bikes.map((bike) => (
              <ProductCard key={bike.id} product={bike} />
            ))}
          </div>
        )}
      </section>

      <section className={section}>
        <div className={sectionHeader}>
          <h3 className={sectionTitle}>Equipamento destacado</h3>
          <p className={sectionText}>Accesorios clave seleccionados para complementar tu moto.</p>
        </div>
        {loading ? (
          <ProductGallerySkeleton count={FEATURED_LIMIT} />
        ) : (
          <div className={gallery}>
            {equipment.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
