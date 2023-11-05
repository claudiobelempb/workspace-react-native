import { TextInput } from 'react-native';
import { styles } from './styles';

type Props = {
  onChangeText: (text: string) => void;
  value: string;
};
export function TextInputAtom({ onChangeText, value }: Props) {
  return (
    <>
      <TextInput
        style={styles.inputContainer}
        placeholder='Nome do participante'
        placeholderTextColor='#6B6B6B'
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
}
