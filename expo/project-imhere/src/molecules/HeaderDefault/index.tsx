import { View } from 'react-native';
import { HeadingDefault } from '../../atoms/HeadingDefault';
import { TextDefault } from '../../atoms/TextDefault';
import { styles } from './styles';

type Props = {
  title: string;
  data: string;
};
export function HeaderDefault({ title, data }: Props) {
  return (
    <View style={styles.container}>
      <HeadingDefault title={title} />
      <TextDefault title={data} />
    </View>
  );
}
