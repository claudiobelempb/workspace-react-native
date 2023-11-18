import { IconAtom } from '@atoms/IconAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonIconMolecule } from '@molecules/ButtonIconMolecule';
import { BoxTemplate } from '@templates/BoxTemplate';
import { useTheme } from 'styled-components';

export function InputButtonMolecule() {
  const { variant } = useTheme();

  return (
    <BoxTemplate
      direction='row'
      variantBackgroud='gray_700'
      isBorderRadius
      radius={6}
      justifyContent='space-between'
    >
      <BoxTemplate flex={1}>
        <TextInputAtom
          placeholder='Nome do participante'
          variantBackgroud='gray_700'
          autoCorrect={false}
        />
      </BoxTemplate>

      <BoxTemplate width={40}>
        <ButtonIconMolecule onPress={() => console.log('InputButtonMolecule')}>
          <IconAtom icon='Plus' size={24} color={variant.green_700} />
        </ButtonIconMolecule>
      </BoxTemplate>
    </BoxTemplate>
  );
}
