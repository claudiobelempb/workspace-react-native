import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name='edit' component={FoodUpdateScreen} /> */}
      {/* <Screen name='details' component={FoodDetaisScreen} /> */}
      {/* <Screen name='feedback' component={FeedbackPage} /> */}
      {/* <Screen name='foods' component={FoodRegistroScreen} /> */}
      {/* <Screen name='statistics' component={StatisticsScreen} /> */}
      <Screen name='home' component={HomeScreen} />
    </Navigator>
  );
}
