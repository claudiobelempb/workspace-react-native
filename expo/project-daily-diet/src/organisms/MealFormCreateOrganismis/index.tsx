import { HeaderFormMolecules } from '@molecules/HeaderFormMolecules';
import { MealFormCreateMolecules } from '@molecules/MealFormCreateMolecules';
import { useNavigation } from '@react-navigation/native';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function MealFormCreateOrganismis() {
  const navigation = useNavigation();

  return (
    <ContainerTemplate flex={1}>
      <HeaderFormMolecules
        title='Nova refeição'
        onPress={() => navigation.navigate('home')}
      />

      <MealFormCreateMolecules />
    </ContainerTemplate>
  );
}
