import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonTextMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton {...props}>
      <BoxTemplate
        variantBackgroud='green_700'
        alingItems='center'
        justifyContent='center'
        height={56}
        isBorderRadius
      >
        <TextAton textAlign='center'>{props.children}</TextAton>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
