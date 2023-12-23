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
    <TouchableOpacityContainer
      $height={{ $height: 56 }}
      $bg={{ $background: 'green_500' }}
      $flex={{
        $justifyContent: 'center',
        $alingItems: 'center'
      }}
      $border={{ $r: { width: 8 } }}
      {...props}
    >
      {props.children}
    </TouchableOpacityContainer>
  );
}
