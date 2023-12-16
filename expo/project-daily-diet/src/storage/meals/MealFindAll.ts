import AsyncStore from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealDTO } from './MealDTO';

export async function MealFindAll() {
  try {
    const storage = await AsyncStore.getItem(`${MEAL_COLLECTION}`);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
