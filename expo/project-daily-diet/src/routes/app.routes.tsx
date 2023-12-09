import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistroFoodScreeen } from '@screens/RegistroFoodScreeen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='foods' component={RegistroFoodScreeen} />
      {/* <Screen name='statistics' component={StatisticsPage} /> */}
      {/* <Screen name='home' component={HomeScreen} /> */}
    </Navigator>
  );
}
