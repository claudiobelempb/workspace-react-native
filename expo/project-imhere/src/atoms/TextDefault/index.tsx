import { ReactNode } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

type Props = {
  title: ReactNode;
  variant?: string;
};

const color = ['#6B6B6B', '#FFFFFF'];

export function TextDefault({ title, variant = '#6B6B6B' }: Props) {
  return <Text style={[styles.eventDate, { color: variant }]}>{title}</Text>;
}
