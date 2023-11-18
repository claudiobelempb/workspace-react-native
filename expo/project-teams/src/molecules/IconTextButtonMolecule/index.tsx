import { TextAton } from '@atoms/TextAtom';

import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components';

export function IconTextButtonMolecule({ ...props }: typeDefault) {
  const { variant } = useTheme();
  return (
    <BoxTemplate
      variantBackgroud='gray_400'
      isBorderRadius
      direction='row'
      flex={2}
      justifyContent='space-between'
    >
      <BoxTemplate flex={6} padding={10}>
        <BoxTemplate
          columnGap={10}
          direction='row'
          flex={1}
          alingItems='center'
        >
          <IconAtom size={24} color={variant.white} icon='User' />
          <TextAton variantColor='white'>{props.title}</TextAton>
        </BoxTemplate>
      </BoxTemplate>
      <BoxTemplate flex={1} direction='row'>
        <ButtonTouchableOpacityAton
          onPress={() => console.log('IconTextButton')}
        >
          <IconAtom icon='X' size={24} color={variant.red_900} />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </BoxTemplate>
  );
}
