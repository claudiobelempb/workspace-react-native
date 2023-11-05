import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  onPress: () => void;
  title: string;
  variant?: string;
};

export function ButtonTouchableOpacityAton({
  onPress,
  title,
  variant = '#31CF67'
}: Props) {
  return (
    <>
      <TouchableOpacity
        style={[styles.container, { backgroundColor: variant }]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
