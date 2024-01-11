import { TouchableOpacityContainer } from './styles';

import { typeDefault } from '@typesDefault/typesDefault';
import { TouchableOpacityProps } from 'react-native';

type Props = {
  icon?: 'left' | 'right';
  color?: string;
} & TouchableOpacityProps &
  typeDefault;

export function ButtonTouchableOpacityAton({ ...props }: Props) {
  return (
    <TouchableOpacityContainer {...props}>
      {props.children}
    </TouchableOpacityContainer>
  );
}
