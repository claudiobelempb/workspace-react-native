import { CardContainerSnackMolecules } from '@molecules/CardContainerSnackMolecules';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { SnackAddMolecules } from '@molecules/SnackAddMolecules';
import { useTheme } from 'styled-components/native';
import { DescriptionDietMolecules } from '../../molecules/DescriptionDietMolecules';

export function HomeOrganismis() {
  const { variant } = useTheme();
  return (
    <>
      <HeaderMolecules />
      <DescriptionDietMolecules />
      <SnackAddMolecules onPress={() => console.log('SnackAddMolecules')} />
      <CardContainerSnackMolecules />
    </>
  );
}
