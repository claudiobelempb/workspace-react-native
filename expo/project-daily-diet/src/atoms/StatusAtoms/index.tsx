import { typeDefault } from '@typesDefault/typesDefault';
import { StyledStatusText } from './styles';

export function StatusAtoms({ ...props }: typeDefault) {
  return (
    <StyledStatusText
      isSelected={props.isSelected}
      variantBackgroud={props.variantBackgroud}
    />
  );
}
