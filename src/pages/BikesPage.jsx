import { PageSection } from '../components/ui/PageSection/PageSection';
import { BikesListContainer } from '../Containers/Bikes/BikesListContainer';

export function BikesPage() {
  return (
    <PageSection
      title="Motos"
      description="Las motos más potentes y versátiles para tomar la ciudad y la ruta."
    >
      <BikesListContainer />
    </PageSection>
  );
}
