import { View } from 'react-native';
import { HeadingAton } from '../../atoms/HeadingAtom';
import { TextAton } from '../../atoms/TextAtom';
import { styles } from './styles';

type Props = {
  title: string;
  data: string;
};

export function InputButtonMolecule({ data, title }: Props) {
  return (
    <View style={styles.container}>
      <HeadingAton title={title} />
      <TextAton title={data} />
    </View>
  );
}
