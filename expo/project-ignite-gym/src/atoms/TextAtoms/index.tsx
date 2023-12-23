import { typeDefault } from '@typesDefault/typesDefault';
import { TextProps } from 'react-native';
import { StyledText } from './styles';

type Props = {} & TextProps & typeDefault;

export function TextAtoms({ ...props }: Props) {
  return <StyledText {...props}>{props.children}</StyledText>;
}
