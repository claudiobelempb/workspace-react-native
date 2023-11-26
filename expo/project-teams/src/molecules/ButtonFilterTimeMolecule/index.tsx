import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAtom } from '@atoms/TextAtom';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonFilterTimeMolecule({
  title,
  isActive = false,
  ...props
}: typeDefault) {
  return (
    <ButtonTouchableOpacityAton
      isBorderRadius={props.isBorderRadius}
      onPress={props.onPress}
      variantBackgroud={props.variantBackgroud}
      isActive={isActive}
      padding={props.padding}
      minHeight={props.minHeight}
      paddingX={props.paddingX}
      paddingY={props.paddingY}
      marginRight={props.marginRight}
      space={props.space}
    >
      <TextAtom fontSize={'m16px'} textTransform={props.textTransform}>
        {title}
      </TextAtom>
    </ButtonTouchableOpacityAton>
  );
}
