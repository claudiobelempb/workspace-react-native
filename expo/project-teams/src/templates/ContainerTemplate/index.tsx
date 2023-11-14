import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function ContainerTemplate({ ...props }: typeDefault) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}
