import { PageSection } from '../components/ui/PageSection/PageSection';
import { EquipmentListContainer } from '../Containers/Equipment/EquipmentListContainer';

export function EquipmentPage() {
  return (
    <PageSection
      title="Equipamento y accesorios"
      description="Accesorios y protecciones clave para cada viaje en moto."
    >
      <EquipmentListContainer />
    </PageSection>
  );
}
