import { StatisticsOrganismis } from '@organisms/StatisticsOrganismis';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function StatisticsScreen() {
  return (
    <ContainerTemplate flex={1} variantBackgroud='gray_100'>
      <StatisticsOrganismis />
    </ContainerTemplate>
  );
}
