import { LoadingAtoms } from '@atoms/LoadingAtoms';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

import { AppAuthRoutes } from '@routes/index';

import ThemeDefault from '@themes/ThemeDefault';
import { StatusBar } from 'react-native';
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
      {fontsLoaded ? <AppAuthRoutes /> : <LoadingAtoms />}
    </ThemeProvider>
  );
}
