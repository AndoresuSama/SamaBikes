import { useNavigate, useParams } from 'react-router-dom';
import { ErrorState } from '../components/ui/ErrorState/ErrorState';
import { ProductDetailSkeleton } from '../components/ui/ProductDetailSkeleton/ProductDetailSkeleton';
import { PageSection } from '../components/ui/PageSection/PageSection';
import { ProductDetails } from '../components/ProductDetails/ProductDetails';
import { useProductById } from '../hooks/useProducts';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProductById(id);

  if (loading) {
    return <ProductDetailSkeleton />;
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
