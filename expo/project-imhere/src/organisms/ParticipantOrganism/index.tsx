import { View } from 'react-native';
import { CardParticipantMolecule } from '../../molecules/CardParticipantMolecule';
import { styles } from './styles';

type Props = {
  name: string;
  onParticipantRemove: () => void;
};

export function ParticipantOrganisms({ name, onParticipantRemove }: Props) {
  return (
    <View style={styles.container}>
      <CardParticipantMolecule
        name={name}
        onParticipantRemove={onParticipantRemove}
      />
    </View>
  );
}
