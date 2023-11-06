import { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Prpops = {
  children: ReactNode;
};
export function ContainerTemplate({ children }: Prpops) {
  return <View style={styles.container}>{children}</View>;
}
