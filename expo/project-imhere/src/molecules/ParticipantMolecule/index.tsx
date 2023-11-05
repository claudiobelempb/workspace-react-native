import { View } from 'react-native';
import { ButtonTouchableOpacityAton } from '../../atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '../../atoms/TextAtom';
import { styles } from './styles';

type Props = {
  name: string;
  onParticipantRemove: () => void;
};

export function ParticipantMolecule({ name, onParticipantRemove }: Props) {
  return (
    <View style={styles.container}>
      <TextAton title={name} variant='#FFF' />
      <ButtonTouchableOpacityAton
        title='-'
        onPress={onParticipantRemove}
        variant='#E23C44'
      />
    </View>
  );
}
