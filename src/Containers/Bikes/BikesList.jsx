import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductGallerySkeleton } from '../../components/ui/ProductGallerySkeleton/ProductGallerySkeleton';
import styles from './BikesList.module.css';

const { list, gallery } = styles;

const BIKES_SKELETON_COUNT = 3;

export const BikesList = ({ bikes, loading = false }) => {
  return (
    <div className={list}>
      {loading ? (
        <ProductGallerySkeleton count={BIKES_SKELETON_COUNT} />
      ) : (
        <div className={gallery}>
          {bikes.map((bike) => (
            <ProductCard key={bike.id} product={bike} />
          ))}
        </div>
      )}
    </div>
  );
};
