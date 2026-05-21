import { useNavigate, useParams } from 'react-router-dom';
import { ErrorState } from '../Components/ui/ErrorState/ErrorState';
import { LoadingState } from '../Components/ui/LoadingState/LoadingState';
import { PageSection } from '../Components/ui/PageSection/PageSection';
import { ProductDetails } from '../Components/ProductDetails/ProductDetails';
import { useProductById } from '../hooks/useProducts';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProductById(id);

  if (loading) {
    return (
      <PageSection>
        <LoadingState message="Cargando producto..." />
      </PageSection>
    );
  }

  if (error) {
    return (
      <PageSection>
        <ErrorState message={error} />
      </PageSection>
    );
  }

  if (!product) {
    return (
      <PageSection title="Producto no encontrado" description="El producto que buscás no existe o fue removido del catálogo.">
        <button type="button" className="btn" onClick={() => navigate(-1)}>
          Volver
        </button>
      </PageSection>
    );
  }

  return <ProductDetails product={product} onBack={() => navigate(-1)} />;
}
