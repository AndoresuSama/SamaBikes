import { ProductCard } from '../../Components/ProductCard/ProductCard';
import styles from './BikesList.module.css';

const { list, gallery } = styles;

export const BikesList = ({ bikes }) => {
  return (
    <div className={list}>
      <div className={gallery}>
        {bikes.map((bike) => (
          <ProductCard key={bike.id} product={bike} />
        ))}
      </div>
    </div>
  );
};
