import { typeDefault } from '@typesDefault/typesDefault';
import Feather from 'react-native-vector-icons/Feather';
import GlyphmapsFeather from 'react-native-vector-icons/glyphmaps/Feather.json';

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
  color?: string;
  size?: number;
} & typeDefault;

export function IconAtoms({
  typeIcon,
  color,
  name,
  size = 18,
  ...props
}: IconAtomProps) {
  switch (typeIcon) {
    case 'arrow-up-right':
      return <Feather name={'arrow-up-right'} size={size} color={color} />;
    case 'arrow-left':
      return <Feather name='arrow-left' size={size} color={color} />;
    case 'plus':
      return <Feather name='plus' size={size} color={color} />;
    case 'edit':
      return <Feather name='edit' size={size} color={color} />;
    case 'trash-2':
      return <Feather name='trash-2' size={size} color={color} />;
    case 'circle':
      return <Feather name='circle' size={size} color={color} />;
    default:
    case 'default':
      return <Feather name={name ? name : ''} size={size} color={color} />;
  }
}
