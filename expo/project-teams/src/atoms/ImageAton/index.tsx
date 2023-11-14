import { ImageProps } from 'react-native';
import { StyledContainer } from './styles';
//import * as S from './styles';

interface Props extends ImageProps {}

export function ImageAtom({ source, height, width }: Props) {
  return <StyledContainer source={source} width={width} height={height} />;
}
