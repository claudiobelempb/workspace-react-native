import { api } from '@services/api';
import { storageUserSave, userRemove, userShow } from '@storage/storageUser';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { UserDTO } from 'src/dtos/UserDTO';

export type AuthContextProps = {
  user: UserDTO;
  isLoadingUser: boolean;
  singIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  async function loadingUser() {
    try {
      const userLogged = await userShow();
      if (userLogged) {
        setUser(userLogged);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUser(false);
    }
  }

  useEffect(() => {
    loadingUser();
  }, []);

  async function singIn(email: string, password: string) {
    try {
      const { data } = await api.post<AuthContextProps>('/sessions', {
        email,
        password
      });
      if (data.user) {
        setUser(data.user);
        storageUserSave(data.user);
        await userRemove();
      }
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      setIsLoadingUser(true);
      setUser({} as UserDTO);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUser(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, singIn, signOut, isLoadingUser }}>
      {children}
    </AuthContext.Provider>
  );
}
