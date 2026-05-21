import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductGallerySkeleton } from '../../components/ui/ProductGallerySkeleton/ProductGallerySkeleton';
import styles from './EquipmentList.module.css';

const { list, gallery } = styles;

const EQUIPMENT_SKELETON_COUNT = 6;

export const EquipmentList = ({ items, loading = false }) => {
  return (
    <div className={list}>
      {loading ? (
        <ProductGallerySkeleton count={EQUIPMENT_SKELETON_COUNT} />
      ) : (
        <div className={gallery}>
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};
