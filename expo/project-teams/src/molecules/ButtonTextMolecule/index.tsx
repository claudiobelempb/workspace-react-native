import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonTextMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton {...props}>
      <BoxTemplate
        justifyContent='center'
        padding={10}
        isBorderRadius
        height={56}
      >
        <TextAton textAlign='center' fontSize='s14' fontWeigh='bold'>
          {props.children}
        </TextAton>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
