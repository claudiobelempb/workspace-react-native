import { ImageProps } from 'react-native';
import { ContainerImage } from './styles';
//import * as S from './styles';

interface Props extends ImageProps {}
export function ImageAtom({ source, height, width }: Props) {
  return <ContainerImage source={source} width={width} height={height} />;
}
