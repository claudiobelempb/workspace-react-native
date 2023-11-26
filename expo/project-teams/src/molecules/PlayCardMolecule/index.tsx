import { TextAtom } from '@atoms/TextAtom';

import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import appUseTheme from 'src/hooks/appUseTheme';

export function PlayCardMolecule({ ...props }: typeDefault) {
  const { variant } = appUseTheme();
  return (
    <BoxTemplate
      variantBackgroud='gray_400'
      isBorderRadius
      direction='row'
      flex={2}
      justifyContent='space-between'
    >
      <BoxTemplate flex={6} padding='m16px'>
        <BoxTemplate
          columnGap={10}
          direction='row'
          flex={1}
          alingItems='center'
        >
          <IconAtom
            nameFeather='user'
            size={24}
            family='Feather'
            color={variant.green_700}
          />
          <TextAtom variantColor='white'>{props.title}</TextAtom>
        </BoxTemplate>
      </BoxTemplate>
      <BoxTemplate flex={1} direction='row'>
        <ButtonTouchableOpacityAton
          onPress={() => console.log('PlayCardMolecule')}
        >
          <IconAtom
            family='Feather'
            nameFeather='x'
            size={24}
            color={variant.red_900}
          />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </BoxTemplate>
  );
}
