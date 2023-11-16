import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { BoxTemplate } from '@templates/BoxTemplate';

export function InputButtonMolecule() {
  return (
    <BoxTemplate
      direction='row'
      height={56}
      variantBackgroud='gray_700'
      isBorderRadius
    >
      <BoxTemplate flex={8}>
        <TextInputAtom
          placeholder='Nome do participante'
          variantPlaceholder={'gray_300'}
          variantBackgroud='transparent'
        />
      </BoxTemplate>
      <BoxTemplate flex={1}>
        <ButtonTextMolecule
          variantColor='white'
          onPress={() => console.log('InputButton')}
          padding={5}
        >
          +
        </ButtonTextMolecule>
      </BoxTemplate>
    </BoxTemplate>
  );
}
