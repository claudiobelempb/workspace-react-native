import { Text } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
};
export function HeadingDefault({ title }: Props) {
  return <Text style={styles.eventName}>{title}</Text>;
}
