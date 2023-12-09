import { HomeOrganismis } from '@organisms/HomeOrganismis';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export default function HomeScreen() {
  return (
    <ContainerTemplate
      flex={1}
      variantBackgroud='gray_100'
      space={{ paddingY: 'm24px' }}
    >
      <HomeOrganismis />
    </ContainerTemplate>
  );
}
