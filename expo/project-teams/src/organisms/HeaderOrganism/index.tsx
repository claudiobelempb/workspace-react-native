import BrandImage from '@assets/logo.png';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { ButtonIconMolecule } from '@molecules/ButtonIconMolecule';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useState } from 'react';

export function HeaderOrganism({ ...props }: typeDefault) {
  const [activeIcon, setActiveIcon] = useState(false);
  return (
    <BoxTemplate
      direction='row'
      justifyContent={activeIcon ? 'space-between' : 'center'}
      alingItems='center'
    >
      {activeIcon && <ButtonIconMolecule />}

      <ButtonTouchableOpacityAton
        onPress={() => console.log('Brand')}
        width={46}
        height={55}
      >
        <ImageAtom source={BrandImage} width={46} height={55} />
      </ButtonTouchableOpacityAton>
    </BoxTemplate>
  );
}
