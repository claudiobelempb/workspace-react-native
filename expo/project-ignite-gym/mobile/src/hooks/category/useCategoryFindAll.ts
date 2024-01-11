import { api } from '@services/api';
import { AxiosResponse } from 'axios';

export async function useCategoryFindAll(): Promise<AxiosResponse> {
  const response: AxiosResponse<string[]> = await api.get('/groups');
  return response;
}
