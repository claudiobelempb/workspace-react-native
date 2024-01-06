import { typeDefault } from '@typesDefault/typesDefault';
import { ImageProps } from 'react-native';
import { StyledContainer } from './styles';

type Props = {} & ImageProps & typeDefault;

export function ImageBackgroundAtoms({ ...props }: Props) {
  return <StyledContainer {...props} />;
}
