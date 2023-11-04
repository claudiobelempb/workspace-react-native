import { View } from 'react-native';
import { ButtonTouchableOpacity } from '../../atoms/ButtonTouchableOpacity';
import { TextInputDefault } from '../../atoms/TextInputDefault';
import { styles } from './styles';

type Props = {
  onParticipantAdd: () => void;
};
export function FormDefault({ onParticipantAdd }: Props) {
  return (
    <View style={styles.container}>
      <TextInputDefault />
      <ButtonTouchableOpacity title='+' onPress={onParticipantAdd} />
    </View>
  );
}
