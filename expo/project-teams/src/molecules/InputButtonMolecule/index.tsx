import { IconAtom } from '@atoms/IconAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonIconMolecule } from '@molecules/ButtonIconMolecule';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useTheme } from 'styled-components';

export function InputButtonMolecule() {
  const { variant } = useTheme();

  return (
    <ContentTemplate
      direction='row'
      justifyContent='space-between'
      alingItems='center'
      variantBackgroud='gray_700'
      isBorderRadius
      minHeight={56}
      isWidth
      padding={10}
      marginBottom={24}
    >
      <TextInputAtom
        placeholder='Nome do participante'
        variantBackgroud='gray_700'
        autoCorrect={false}
        placeholderTextColor={variant.gray_300}
        variantColor='gray_300'
        flex={1}
      />

      <ButtonIconMolecule onPress={() => console.log('InputButtonMolecule')}>
        <IconAtom icon='Plus' size={24} color={variant.green_700} />
      </ButtonIconMolecule>
    </ContentTemplate>
  );
}
