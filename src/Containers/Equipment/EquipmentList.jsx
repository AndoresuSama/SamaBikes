import { ProductCard } from '../../Components/ProductCard/ProductCard';
import styles from './EquipmentList.module.css';

const { list, gallery } = styles;

export const EquipmentList = ({ items }) => {
  return (
    <div className={list}>
      <div className={gallery}>
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
