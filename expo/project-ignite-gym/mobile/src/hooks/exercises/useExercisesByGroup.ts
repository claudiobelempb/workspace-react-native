import { api } from '@services/api';
import { AxiosResponse } from 'axios';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

export async function useExercisesByGroup(
  categoryId: string
): Promise<AxiosResponse> {
  const response: AxiosResponse<ExerciseDTO[]> = await api.get(
    `/exercises/bygroup/${categoryId}`
  );
  return response;
}
