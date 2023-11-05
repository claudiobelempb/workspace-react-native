import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { ContainerTemplate } from './src/templates/ContainerTemplate';

export default function App() {
  return (
    <ContainerTemplate>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <HomeScreen />
    </ContainerTemplate>
  );
}
