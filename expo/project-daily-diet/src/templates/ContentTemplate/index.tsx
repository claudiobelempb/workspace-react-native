import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function ContentTemplate({ ...props }: typeDefault) {
  return (
    <StyledContainer
      isBorderRadius={props.isBorderRadius}
      radius={props.radius}
      variantBackgroud={props.variantBackgroud}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      direction={props.direction}
      flex={props.flex}
      space={props.space}
      position={props.position}
      columnGap={props.columnGap}
      rowGap={props.rowGap}
    >
      {props.children}
    </StyledContainer>
  );
}
