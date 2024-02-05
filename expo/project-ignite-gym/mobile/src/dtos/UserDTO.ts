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

export type UserProfileDTO = {
  name: string;
  email?: string;
  password?: string | null | undefined;
  old_password?: string | null | undefined;
  confirm_password?: string | null | undefined;
};
