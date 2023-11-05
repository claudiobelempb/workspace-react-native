import { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  children: ReactNode;
};
export function FormTemplate({ children }: Props) {
  return <View style={[styles.constainer]}>{children}</View>;
}
