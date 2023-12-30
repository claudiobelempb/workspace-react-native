import { TextInputProps } from 'react-native';

import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components';
import { TextInputAtomContainer } from './styles';

type Props = TextInputProps & typeDefault;

export function TextInputAtom({ ...props }: Props) {
  const { color } = useTheme();
  return (
    <TextInputAtomContainer
      $height={{ $height: 56 }}
      $space={{ $py: 's14' }}
      $color={{ $color: 'gray_100' }}
      $bg={{ $background: 'gray_700' }}
      placeholderTextColor={color.gray_100}
      $border={{ $r: { width: 8 } }}
      {...props}
    />
  );
}
