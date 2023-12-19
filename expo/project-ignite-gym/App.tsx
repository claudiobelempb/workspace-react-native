import { AppLoading } from '@components/AppLoading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { SignIn } from '@screens/SignIn';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { THEME_DEFAULT } from './src/theme/theme-default';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME_DEFAULT}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <SignIn /> : <AppLoading />}
    </NativeBaseProvider>
  );
}
