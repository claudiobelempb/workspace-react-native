import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function BoxAtoms({ ...props }: typeDefault) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}
