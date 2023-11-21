import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function BoxTemplate({ ...props }: typeDefault) {
  return (
    <StyledContainer
      minHeight={props.minHeight}
      padding={props.padding}
      paddingLeft={props.paddingLeft}
      isWidth={props.isWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      direction={props.direction}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      marginBottom={props.marginBottom}
      flex={props.flex}
    >
      {props.children}
    </StyledContainer>
  );
}
