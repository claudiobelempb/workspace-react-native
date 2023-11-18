import ThemeDefault from '@themes/ThemeDefault';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { LoadingAtom } from '@atoms/LoadingAtom';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { PlayersScreen } from '@screens/PlayersScreen';
import { SafeAreaView } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={ThemeDefault}>
        <StatusBar style='light' translucent />
        {fontsLoaded ? <PlayersScreen /> : <LoadingAtom />}
      </ThemeProvider>
    </SafeAreaView>
  );
}
