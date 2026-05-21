import { useProducts } from '../../hooks/useProducts';
import { ErrorState } from '../../Components/ui/ErrorState/ErrorState';
import { LoadingState } from '../../Components/ui/LoadingState/LoadingState';
import { BikesList } from './BikesList';

export const BikesListContainer = () => {
  const { bikes, loading, error } = useProducts();

  if (loading) {
    return <LoadingState message="Cargando motos..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return <BikesList bikes={bikes} />;
};
