import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAtom } from '@atoms/TextAtom';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonTextMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton
      minHeight={props.minHeight}
      padding={props.padding}
      isWidth={props.isWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      onPress={props.onPress}
      isActive={props.isActive}
      position={props.position}
      space={props.space}
      marginBottom={props.marginBottom}
    >
      <TextAtom
        variantColor={props.variantColor}
        textAlign={props.textAlign}
        textTransform={props.textTransform}
        isWidth={props.isWidth}
        isHeight={props.isHeight}
      >
        {props.title}
      </TextAtom>
    </ButtonTouchableOpacityAton>
  );
}
