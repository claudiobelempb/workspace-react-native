import { View } from 'react-native';
import { InputButtonMolecule } from '../../molecules/InputButtonMolecule';
import { styles } from './styles';

type Props = {
  title: string;
  data: string;
};
export function HeaderOrganisms({ title, data }: Props) {
  return (
    <View style={styles.container}>
      <InputButtonMolecule title={title} data={data} />
    </View>
  );
}
