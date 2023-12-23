import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function ContainerAtoms({ ...props }: typeDefault) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}
