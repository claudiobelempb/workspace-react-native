import BrandImage from '@assets/logo.png';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { ButtonIconMolecule } from '@molecules/ButtonIconMolecule';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function HeaderOrganism({ ...props }: typeDefault) {
  return (
    <BoxTemplate
      direction='row'
      justifyContent={props.isIcon ? 'space-between' : 'center'}
      alingItems='center'
    >
      {props.isIcon && (
        <ButtonIconMolecule
          width={32}
          height={32}
          variantIconColor='red_100'
          onPress={() => console.log('Voltar Turma')}
        >
          <IconAtom icon='CaretLeft' size={32} color='#FFFFFF' />
        </ButtonIconMolecule>
      )}

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
