import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GlyphmapsFeather from 'react-native-vector-icons/glyphmaps/Feather.json';
import GlyphmapsFontAwesome from 'react-native-vector-icons/glyphmaps/FontAwesome.json';
import GlyphmapsMaterialIcons from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

type IconAtomProps = {
  nameFeather?: keyof typeof GlyphmapsFeather;
  nameMaterialIcons?: keyof typeof GlyphmapsMaterialIcons;
  nameFontAwesome?: keyof typeof GlyphmapsFontAwesome;
  //name: 'UsersThree' | 'User' | 'X' | 'Plus' | 'CaretLeft';
  family: 'Feather' | 'MaterialIcons' | 'FontAwesome';
  weight?: IconWeight;
  color: string;
  size?: number;
};

export function IconAtom(props: IconAtomProps) {
  return (
    <>
      {props.family === 'Feather' && (
        <Feather
          name={props.nameFeather ? props.nameFeather : ''}
          size={props.size}
          color={props.color}
        />
      )}
      {props.family === 'MaterialIcons' && (
        <MaterialIcons
          name={props.nameMaterialIcons ? props.nameMaterialIcons : ''}
          size={props.size}
          color={props.color}
        />
      )}
      {props.family === 'FontAwesome' && (
        <FontAwesome
          name={props.nameMaterialIcons ? props.nameMaterialIcons : ''}
          size={props.size}
          color={props.color}
        />
      )}
    </>
  );
}
