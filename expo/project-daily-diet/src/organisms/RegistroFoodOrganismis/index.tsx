import { FormRegisterMolecules } from '@molecules/FormRegisterMolecules';
import { HeaderFormMolecules } from '@molecules/HeaderFormMolecules';

export function RegistroFoodOrganismis() {
  return (
    <>
      <HeaderFormMolecules
        title='Nova refeição'
        onPress={() => console.log('HeaderFormMolecules')}
      />

      <FormRegisterMolecules />
    </>
  );
}
