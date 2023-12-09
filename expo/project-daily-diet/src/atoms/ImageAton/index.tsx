import { typeDefault } from '@typesDefault/typesDefault';
import { ImageProps } from 'react-native';
import { StyledContainer } from './styles';
//import * as S from './styles';

type Props = {} & ImageProps & typeDefault;

export function ImageAtom({ source, height, width, ...props }: Props) {
  return (
    <StyledContainer source={source} width={width} height={height} {...props} />
  );
}
