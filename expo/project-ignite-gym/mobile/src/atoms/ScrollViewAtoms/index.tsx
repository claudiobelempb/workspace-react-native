import { typeDefault } from '@typesDefault/typesDefault';
import { ScrollViewProps } from 'react-native';
import { StyledContainer } from './styles';

type Props = ScrollViewProps & typeDefault;

export function ScrollViewAtoms({ ...props }: Props) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}
