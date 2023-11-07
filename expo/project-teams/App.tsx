import { HomeScreen } from '@screens/HomeScreen';
import ThemeDefault from '@themes/ThemeDefault';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { LoadingAtom } from '@atoms/LoadingAtom';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={ThemeDefault}>
      <StatusBar style='light' />
      {fontsLoaded ? <HomeScreen /> : <LoadingAtom />}
    </ThemeProvider>
  );
}
