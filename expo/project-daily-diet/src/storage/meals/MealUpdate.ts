import { MealCreate } from './MealCreate';
import { MealDTO } from './MealDTO';
import { MealDelete } from './MealDelete';

export async function MealUpdate(mealId: string, meal: MealDTO) {
  try {
    await MealDelete(mealId);
    await MealCreate(meal);
  } catch (error) {
    throw error;
  }
}
