import { useProducts } from '../../hooks/useProducts';
import { ErrorState } from '../../components/ui/ErrorState/ErrorState';
import { BikesList } from './BikesList';

export const BikesListContainer = () => {
  const { bikes, loading, error } = useProducts();

  if (error) {
    return <ErrorState message={error} />;
  }

  return <BikesList bikes={bikes} loading={loading} />;
};
