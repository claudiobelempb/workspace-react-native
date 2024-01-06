import { LoadingAtoms } from '@atoms/LoadingAtoms';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { AppRoutes } from '@routes/index';

import ThemeDefault from '@themes/ThemeDefault';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={ThemeDefault}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <AppRoutes /> : <LoadingAtoms />}
      <Toast position='bottom' bottomOffset={20} />
    </ThemeProvider>
  );
}
