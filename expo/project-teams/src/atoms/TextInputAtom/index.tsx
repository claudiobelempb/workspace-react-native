import { TextInputProps } from 'react-native';

import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components/native';
import { TextInputAtomContainer } from './styles';

type Props = TextInputProps & typeDefault;

export function TextInputAtom({ ...props }: Props) {
  const { variant } = useTheme();

  return (
    <TextInputAtomContainer
      minHeight={props.minHeight}
      padding={props.padding}
      paddingLeft={props.paddingLeft}
      isWidth={props.isWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      variantColor={props.variantColor}
      direction={props.direction}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      onPress={props.onPress}
      isActive={props.isActive}
      placeholderTextColor={variant.gray_300}
      marginBottom={props.marginBottom}
      placeholder={props.placeholder}
      value={props.value}
      flex={props.flex}
      space={props.space}
    />
  );
}
