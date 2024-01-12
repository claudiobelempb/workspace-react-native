import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { typeDefault } from '@typesDefault/typesDefault';

import { HomeHeaderMolecules } from '@molecules/HomeHeaderMolecules';

export function DefaultTemplates({ children }: typeDefault) {
  return (
    <>
      <ContainerAtoms $bg={{ $background: 'gray_700' }} $flex={{ $flex: 1 }}>
        <HomeHeaderMolecules />
        {children}
      </ContainerAtoms>
    </>
  );
}
