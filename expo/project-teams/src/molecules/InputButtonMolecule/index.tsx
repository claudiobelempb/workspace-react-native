import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';

export function InputButtonMolecule() {
  return (
    <ContentTemplate>
      <BoxTemplate>
        <TextInputAtom
          placeholder='Nome do participante'
          variantPlaceholder={'gray_300'}
        />
      </BoxTemplate>
      <BoxTemplate>
        <ButtonTouchableOpacityAton onPress={() => console.log('InputButton')}>
          +
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </ContentTemplate>
  );
}
