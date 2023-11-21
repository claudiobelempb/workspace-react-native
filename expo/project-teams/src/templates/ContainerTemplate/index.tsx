import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function ContainerTemplate({ ...props }: typeDefault) {
  return (
    <StyledContainer
      padding={props.padding}
      isWidth={props.isWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
    >
      {props.children}
    </StyledContainer>
  );
}
