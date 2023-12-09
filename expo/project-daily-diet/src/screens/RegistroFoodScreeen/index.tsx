import { RegistroFoodOrganismis } from '@organisms/RegistroFoodOrganismis';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function RegistroFoodScreeen() {
  return (
    <>
      <ContainerTemplate
        variantBackgroud='gray_100'
        flex={1}
        position={{ position: 'relative' }}
      >
        <RegistroFoodOrganismis />
      </ContainerTemplate>
    </>
  );
}
