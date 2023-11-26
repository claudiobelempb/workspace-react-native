import { IconAtom } from '@atoms/IconAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonIconMolecule } from '@molecules/ButtonIconMolecule';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useTheme } from 'styled-components/native';

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
      marginBottom={24}
    >
      <TextInputAtom
        placeholder='Nome do participante'
        variantBackgroud='gray_700'
        autoCorrect={false}
        placeholderTextColor={'#FFF'}
        variantColor='gray_300'
        flex={1}
        space={{ paddingY: 's12px' }}
      />

      <ButtonIconMolecule
        onPress={() => console.log('InputButtonMolecule')}
        space={{ padding: 's8px' }}
      >
        <IconAtom
          family='Feather'
          nameFeather='x'
          size={30}
          color={variant.green_700}
        />
      </ButtonIconMolecule>
    </ContentTemplate>
  );
}
