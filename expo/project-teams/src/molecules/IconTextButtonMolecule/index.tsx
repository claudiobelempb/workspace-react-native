import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components/native';

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
      <BoxTemplate flex={6} padding={'s8px'}>
        <BoxTemplate
          columnGap={10}
          direction='row'
          flex={1}
          alingItems='center'
        >
          <IconAtom
            family='Feather'
            color={variant.green_700}
            nameFeather='user'
            size={24}
          />
          <TextAtom variantColor='white'>{props.title}</TextAtom>
        </BoxTemplate>
      </BoxTemplate>
      <BoxTemplate flex={1} direction='row'>
        <ButtonTouchableOpacityAton
          onPress={() => console.log('IconTextButton')}
        >
          <IconAtom
            family='Feather'
            color={variant.green_700}
            nameFeather='x'
            size={24}
          />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </BoxTemplate>
  );
}
