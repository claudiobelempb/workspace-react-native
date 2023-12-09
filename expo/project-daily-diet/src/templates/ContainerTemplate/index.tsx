import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function ContainerTemplate({ ...props }: typeDefault) {
  return (
    <StyledContainer
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      minHeight={props.minHeight}
      direction={props.direction}
      flex={props.flex}
      space={props.space}
      position={props.position}
    >
      {props.children}
    </StyledContainer>
  );
}
