import { typeDefault } from '@typesDefault/typesDefault';
import { StyledText } from './styles';

export function TextAton({ ...props }: typeDefault) {
  return <StyledText {...props}>{props.children}</StyledText>;
}
