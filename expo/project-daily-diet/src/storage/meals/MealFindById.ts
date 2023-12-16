import { MealFindAll } from './MealFindAll';

export async function MealFindById(mealId: string) {
  try {
    const storage = await MealFindAll();
    const meals = storage.find(meal => meal.mealId === mealId);
    return meals;
  } catch (error) {
    throw error;
  }
}
