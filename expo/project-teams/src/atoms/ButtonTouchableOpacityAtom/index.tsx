import { BoxTemplate } from '@templates/BoxTemplate';
import { TouchableOpacityContainer } from './styles';

import { typeDefault } from '@typesDefault/typesDefault';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & typeDefault;

export function ButtonTouchableOpacityAton({ ...props }: Props) {
  return (
    <BoxTemplate {...props}>
      <TouchableOpacityContainer {...props}>
        {props.children}
      </TouchableOpacityContainer>
    </BoxTemplate>
  );
}
