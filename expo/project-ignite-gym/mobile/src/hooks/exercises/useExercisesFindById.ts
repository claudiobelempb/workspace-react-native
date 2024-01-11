import { api } from '@services/api';
import { AxiosResponse } from 'axios';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

export async function useExercisesFindById(
  exerciseId: string
): Promise<AxiosResponse> {
  const response: AxiosResponse<ExerciseDTO[]> = await api.get(
    `/exercises/${exerciseId}`
  );
  return response;
}
