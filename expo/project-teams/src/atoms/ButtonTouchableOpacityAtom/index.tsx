import { BoxTemplate } from '@templates/BoxTemplate';
import { TouchableOpacityContainer } from './styles';

import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonTouchableOpacityAton({ ...props }: typeDefault) {
  return (
    <TouchableOpacityContainer {...props}>
      <BoxTemplate>{props.children}</BoxTemplate>
    </TouchableOpacityContainer>
  );
}
