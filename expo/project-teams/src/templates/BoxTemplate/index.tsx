import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function BoxTemplate({ ...props }: typeDefault) {
  return (
    <StyledContainer
      minHeight={props.minHeight}
      padding={props.padding}
      paddingLeft={props.paddingLeft}
      paddingTop={props.paddingTop}
      paddingRight={props.paddingRight}
      paddingBottom={props.paddingBottom}
      isWidth={props.isWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      direction={props.direction}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      flex={props.flex}
      rowGap={props.rowGap}
      columnGap={props.columnGap}
      justifyContent={props.justifyContent}
      marginBottom={props.marginBottom}
      marginRight={props.marginRight}
      marginLeft={props.marginLeft}
      space={props.space}
    >
      {props.children}
    </StyledContainer>
  );
}
