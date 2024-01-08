import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { AuthContextProvider } from '@contexts/AuthContext';
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

      <AuthContextProvider>
        {fontsLoaded ? (
          <AppRoutes />
        ) : (
          <LoadingAtoms
            $flex={{ $flex: 1 }}
            $bg={{ $background: 'gray_700' }}
            size={'large'}
          />
        )}
      </AuthContextProvider>
      <Toast position='bottom' bottomOffset={20} />
    </ThemeProvider>
  );
}
