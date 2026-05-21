import { useProducts } from '../../hooks/useProducts';
import { ErrorState } from '../../Components/ui/ErrorState/ErrorState';
import { LoadingState } from '../../Components/ui/LoadingState/LoadingState';
import { FEATURED_LIMIT } from '../../utils/catalog';
import { MainList } from './MainList';

export const MainListContainer = () => {
  const { bikes, equipment, loading, error } = useProducts();

  if (loading) {
    return <LoadingState message="Cargando destacados..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <MainList
      bikes={bikes.slice(0, FEATURED_LIMIT)}
      equipment={equipment.slice(0, FEATURED_LIMIT)}
    />
  );
};
