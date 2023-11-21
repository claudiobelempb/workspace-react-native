import { TouchableOpacityContainer } from './styles';

import { typeDefault } from '@typesDefault/typesDefault';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & typeDefault;

export function ButtonTouchableOpacityAton({ ...props }: Props) {
  return (
    <TouchableOpacityContainer
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      isHeight={props.isHeight}
      isWidth={props.isWidth}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      direction={props.direction}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      onPress={props.onPress}
      isActive={props.isActive}
      padding={props.padding}
      paddingX={props.paddingX}
      paddingY={props.paddingY}
      marginRight={props.marginRight}
    >
      {props.children}
    </TouchableOpacityContainer>
  );
}
