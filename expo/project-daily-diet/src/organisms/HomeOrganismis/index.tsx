import { HomeMolecules } from '@molecules/HomeMolecules';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function HomeOrganismis() {
  return (
    <ContainerTemplate
      flex={1}
      variantBackgroud='gray_100'
      space={{ paddingY: 'm24px' }}
    >
      <HomeMolecules />
    </ContainerTemplate>
  );
}
