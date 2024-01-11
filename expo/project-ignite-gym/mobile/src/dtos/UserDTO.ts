export type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};
export type DataUserDTO = {
  user: UserDTO;
  token: string;
  refresh_token: string;
};
