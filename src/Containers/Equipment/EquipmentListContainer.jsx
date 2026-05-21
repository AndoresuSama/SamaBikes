import { useProducts } from '../../hooks/useProducts';
import { ErrorState } from '../../Components/ui/ErrorState/ErrorState';
import { LoadingState } from '../../Components/ui/LoadingState/LoadingState';
import { EquipmentList } from './EquipmentList';

export const EquipmentListContainer = () => {
  const { equipment, loading, error } = useProducts();

  if (loading) {
    return <LoadingState message="Cargando equipamento..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return <EquipmentList items={equipment} />;
};
