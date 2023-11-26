import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonIconMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      minWidth={props.minWidth}
      maxWidth={props.maxHeight}
      padding={props.padding}
      isWidth={props.isWidth}
      isHeight={props.isHeight}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      direction={props.direction}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      onPress={props.onPress}
      isActive={props.isActive}
      space={props.space}
    >
      {props.children}
    </ButtonTouchableOpacityAton>
  );
}
