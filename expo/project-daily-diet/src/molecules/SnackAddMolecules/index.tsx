import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function SnackAddMolecules({ onPress }: typeDefault) {
  return (
    <ContentTemplate space={{ marginTop: 'm24px' }} maxHeight={80}>
      <BoxTemplate rowGap={5}>
        <TextAtom variantColor='gray_600'>Refeições</TextAtom>
        <ButtonTouchableOpacityAton
          typeButton='dark'
          typeIcon='plus'
          title='Nova refeição'
          onPress={onPress}
        />
      </BoxTemplate>
    </ContentTemplate>
  );
}
