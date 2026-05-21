import { PageSection } from '../components/ui/PageSection/PageSection';
import { MainListContainer } from '../Containers/Main/MainListContainer';

export function HomePage() {
  return (
    <PageSection
      title="Destacados"
      description="Elige entre las mejores motos y el equipamento que no puede faltar en tu ruta."
    >
      <MainListContainer />
    </PageSection>
  );
}
