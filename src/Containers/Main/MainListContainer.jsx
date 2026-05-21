import { useProducts } from '../../hooks/useProducts';
import { ErrorState } from '../../components/ui/ErrorState/ErrorState';
import { FEATURED_LIMIT } from '../../utils/catalog';
import { MainList } from './MainList';

export const MainListContainer = () => {
  const { bikes, equipment, loading, error } = useProducts();

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <MainList
      loading={loading}
      bikes={loading ? [] : bikes.slice(0, FEATURED_LIMIT)}
      equipment={loading ? [] : equipment.slice(0, FEATURED_LIMIT)}
    />
  );
};
