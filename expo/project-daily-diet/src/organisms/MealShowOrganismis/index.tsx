import { MealShowMolecules } from '@molecules/MealShowMolecules';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function MealShowOrganismis() {
  return (
    <ContainerTemplate flex={1}>
      <MealShowMolecules />
    </ContainerTemplate>
  );
}
