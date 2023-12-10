import { FoodRegisterMolecules } from '@molecules/FoodRegisterMolecules';
import { HeaderFormMolecules } from '@molecules/HeaderFormMolecules';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function FoodRegistroOrganismis() {
  return (
    <ContainerTemplate flex={1}>
      <HeaderFormMolecules
        title='Nova refeição'
        onPress={() => console.log('HeaderFormMolecules')}
      />

      <FoodRegisterMolecules />
    </ContainerTemplate>
  );
}
