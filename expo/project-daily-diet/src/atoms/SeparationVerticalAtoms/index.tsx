import { typeDefault } from '@typesDefault/typesDefault';
import { StyledSeparationVerticalText } from './styles';

export function SeparationVerticalAtoms({ ...props }: typeDefault) {
  return <StyledSeparationVerticalText isSelected={props.isSelected} />;
}
