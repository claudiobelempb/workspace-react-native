import { typeDefault } from '@typesDefault/typesDefault';
import { TextProps } from 'react-native';
import { Container } from './styles';

type Props = {} & TextProps & typeDefault;

export function ErroTextAtoms({ ...props }: Props) {
  return <Container {...props}>{props.children}</Container>;
}
