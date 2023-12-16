import AsyncStore from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { MealDTO } from './MealDTO';
import { MealFindAll } from './MealFindAll';

export async function MealCreate(FormMeal: MealDTO) {
  try {
    const meals = await MealFindAll();

    const mealAlreadyExists = meals.includes(FormMeal);

    if (mealAlreadyExists) {
      throw new AppError('Essa refeição já está adiciona.');
    }

    const storage = JSON.stringify([...meals, FormMeal]);

    await AsyncStore.setItem(`${MEAL_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}
