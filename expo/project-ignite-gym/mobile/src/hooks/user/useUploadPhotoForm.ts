import { api } from '@services/api';
import { AxiosResponse } from 'axios';
import { UserProfileDTO } from 'src/dtos/UserDTO';

export async function useUpdateFormProfile(
  data: UserProfileDTO
): Promise<AxiosResponse> {
  const response: AxiosResponse<UserProfileDTO> = await api.put('/users', data);
  return response;
}
