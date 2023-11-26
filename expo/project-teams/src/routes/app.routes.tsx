import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateGroupScreen from '@screens/CreateGroupScreen';
import HomeScreen from '@screens/HomeScreen';
import PlayersScreen from '@screens/PlayersScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={HomeScreen} />
      <Screen name='create' component={CreateGroupScreen} />
      <Screen name='players' component={PlayersScreen} />
    </Navigator>
  );
}
