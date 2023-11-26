import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function ContentTemplate({ ...props }: typeDefault) {
  return (
    <StyledContainer
      padding={props.padding}
      paddingY={props.paddingY}
      paddingX={props.paddingX}
      paddingLeft={props.paddingLeft}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      minHeight={props.minHeight}
      direction={props.direction}
      marginBottom={props.marginBottom}
      marginRight={props.marginRight}
      marginLeft={props.marginLeft}
      flex={props.flex}
      space={props.space}
    >
      {props.children}
    </StyledContainer>
  );
}
