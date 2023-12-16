import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedbackPage } from '@screens/FeedbackScreen';
import { FoodUpdateScreen } from '@screens/FoodUpdateScreen';
import HomeScreen from '@screens/HomeScreen';
import { MealCreateScreen } from '@screens/MealCreateScreen';
import { MealShowScreen } from '@screens/MealShowScreen';
import { StatisticsScreen } from '@screens/StatisticsScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={HomeScreen} />
      <Screen name='show' component={MealShowScreen} />
      <Screen name='statistics' component={StatisticsScreen} />
      <Screen name='create' component={MealCreateScreen} />
      <Screen name='update' component={FoodUpdateScreen} />
      <Screen name='feedback' component={FeedbackPage} />
    </Navigator>
  );
}
