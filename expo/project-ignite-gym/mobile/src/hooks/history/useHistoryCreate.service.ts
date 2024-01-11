import { api } from '@services/api';
import { AxiosResponse } from 'axios';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

export async function useHistoriCreateService(
  exerciseId: string
): Promise<AxiosResponse> {
  const response: AxiosResponse<ExerciseDTO[]> = await api.post(`/history`, {
    exercise_id: exerciseId
  });
  return response;
}
