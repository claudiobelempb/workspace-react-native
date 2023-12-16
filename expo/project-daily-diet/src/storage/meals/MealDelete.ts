import AsyncStore from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealFindAll } from './MealFindAll';

export async function MealDelete(mealId: string) {
  try {
    const storage = await MealFindAll();
    const filter = storage.filter(meal => meal.mealId !== mealId);
    const meal = JSON.stringify(filter);

    await AsyncStore.setItem(MEAL_COLLECTION, meal);
    await AsyncStore.removeItem(`${MEAL_COLLECTION}-${mealId}`);
  } catch (error) {
    throw error;
  }
}
