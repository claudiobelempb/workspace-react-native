import { View } from 'react-native';
import { ButtonTouchableOpacity } from '../../atoms/ButtonTouchableOpacity';
import { TextDefault } from '../../atoms/TextDefault';
import { styles } from './styles';

type Props = {
  name: string;
  onParticipantRemove: () => void;
};

export function ParticipantDefault({ name, onParticipantRemove }: Props) {
  return (
    <View style={styles.container}>
      <TextDefault title={name} variant='#FFF' />
      <ButtonTouchableOpacity
        title='-'
        onPress={onParticipantRemove}
        variant='#E23C44'
      />
    </View>
  );
}
