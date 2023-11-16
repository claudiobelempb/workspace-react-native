import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonIconMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton {...props} onPress={props.onPress}>
      <BoxTemplate direction='row' columnGap={10}>
        {props.children}
        <TextAton>{props.title}</TextAton>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
