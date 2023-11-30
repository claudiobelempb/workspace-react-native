import { IconAtom } from '@atoms/IconAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonIconMolecule } from '@molecules/ButtonIconMolecule';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

type Props = TextInputProps & typeDefault;

export function InputButtonMolecule({ ...props }: Props) {
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
        onChangeText={props.onChangeText}
        value={props.value}
      />

      <ButtonIconMolecule onPress={props.onPress} space={{ padding: 's8px' }}>
        <IconAtom
          family='Feather'
          nameFeather='plus'
          size={30}
          color={variant.green_700}
        />
      </ButtonIconMolecule>
    </ContentTemplate>
  );
}
