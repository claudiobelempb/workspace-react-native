import { api } from '@services/api';
import { AxiosResponse } from 'axios';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

export async function useHistoriFindAllService(): Promise<AxiosResponse> {
  const response: AxiosResponse<ExerciseDTO[]> = await api.get(`/history`);
  return response;
}
