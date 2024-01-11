import { typeDefault } from '@typesDefault/typesDefault';
import { ImageProps } from 'react-native';
import { StyledContainer } from './styles';
//import * as S from './styles';

type Props = {} & ImageProps & typeDefault;

export function ImageAtoms({ ...props }: Props) {
  return <StyledContainer {...props} />;
}
