import * as Icons from 'phosphor-react-native';
import { StyleProp, ViewStyle } from 'react-native';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

interface IconProps {
  icon: keyof typeof Icons;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  style?: StyleProp<ViewStyle>;
  mirrored?: boolean;
}

export function IconAtom({ icon, ...props }: IconProps) {
  switch (icon) {
    case 'CaretLeft': {
      return <Icons.CaretLeft {...props} />;
    }
    case 'CaretRight':
      return <Icons.CaretRight {...props} />;
    case 'X':
      return <Icons.X {...props} />;
    case 'UsersThree':
      return <Icons.UsersThree {...props} />;
    case 'Plus':
      return <Icons.Plus {...props} />;
    case 'User':
      return <Icons.User {...props} />;
  }
}
