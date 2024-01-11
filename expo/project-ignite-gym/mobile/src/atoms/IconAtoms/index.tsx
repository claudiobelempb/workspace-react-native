import { typeDefault } from '@typesDefault/typesDefault';
import Feather from 'react-native-vector-icons/Feather';
import GlyphmapsFeather from 'react-native-vector-icons/glyphmaps/Feather.json';
import { useTheme } from 'styled-components';
import { StyledContainer } from './styles';
export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

type IconAtomProps = {
  name?: keyof typeof GlyphmapsFeather;
  weight?: IconWeight;
  colorIcon?: string;
} & typeDefault;

export function IconAtoms({ name, colorIcon, ...props }: IconAtomProps) {
  const theme = useTheme();
  return (
    <StyledContainer {...props}>
      <Feather
        name={name ?? ''}
        size={theme.fonts.size[props.$font?.$size ?? 'x64']}
        color={
          colorIcon
            ? colorIcon
            : theme.color[props.$color?.$color || 'gray_100']
        }
      />
    </StyledContainer>
  );
}
