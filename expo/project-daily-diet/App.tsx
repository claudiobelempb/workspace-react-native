import { ThemeProvider } from 'styled-components/native';

import { LoadingAtom } from '@atoms/LoadingAtom';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import ThemeDefault from './src/themes/ThemeDefault';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={ThemeDefault}>
      <StatusBar barStyle={'light-content'} translucent />
      {fontsLoaded ? <Routes /> : <LoadingAtom />}
    </ThemeProvider>
  );
}
