import { useProducts } from '../../hooks/useProducts';
import { ErrorState } from '../../components/ui/ErrorState/ErrorState';
import { EquipmentList } from './EquipmentList';

export const EquipmentListContainer = () => {
  const { equipment, loading, error } = useProducts();

  if (error) {
    return <ErrorState message={error} />;
  }

  return <EquipmentList items={equipment} loading={loading} />;
};
