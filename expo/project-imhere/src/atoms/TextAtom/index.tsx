import { ReactNode } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

type Props = {
  title: ReactNode;
  variant?: string;
  aling: 'left' | 'auto' | 'center' | 'right' | 'justify';
};

const color = ['#6B6B6B', '#FFFFFF'];

export function TextAton({
  title,
  variant = '#6B6B6B',
  aling = 'left'
}: Props) {
  return (
    <Text
      style={[styles.eventDate, { color: variant, textAlign: aling ?? 'left' }]}
    >
      {title}
    </Text>
  );
}
