import { TextInput } from 'react-native';
import { styles } from './styles';

export function TextInputDefault() {
  return (
    <>
      <TextInput
        style={styles.inputContainer}
        placeholder='Nome do participante'
        placeholderTextColor='#6B6B6B'
      />
    </>
  );
}
