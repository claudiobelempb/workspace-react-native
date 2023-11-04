import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  inputContainer: {
    marginTop: 16
  }
});
