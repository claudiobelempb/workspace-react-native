import { api } from '@services/api';
import {
  userCreateAuthTokenStorage,
  userFindAuthTokenStotage,
  userRemoveTokenStorage
} from '@storage/storageAuthToken';
import {
  userCreateStorage,
  userRemoveStorage,
  userShowStorage
} from '@storage/storageUser';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { DataUserDTO, UserDTO } from 'src/dtos/UserDTO';

export type AuthContextProps = {
  contextUser: UserDTO;
  contextIsLoadingUser: boolean;
  contextSingIn: (email: string, password: string) => Promise<void>;
  contextSignOut: () => Promise<void>;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [contextUser, setContextUser] = useState<UserDTO>({} as UserDTO);
  const [contextIsLoadingUser, setContextIsLoadingUser] = useState(true);

  async function contextCreateHeaderAndToken(dto: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setContextUser(dto);
  }

  async function contextCreateAndTokenStorage(dto: UserDTO, token: string) {
    try {
      setContextIsLoadingUser(true);
      await userCreateStorage(dto);
      await userCreateAuthTokenStorage(token);
    } catch (error) {
      throw error;
    } finally {
      setContextIsLoadingUser(false);
    }
  }

  async function contextSingIn(email: string, password: string) {
    try {
      const { data } = await api.post<DataUserDTO>('/sessions', {
        email,
        password
      });

      console.log(data);

      if (data.user && data.token) {
        setContextIsLoadingUser(true);
        await contextCreateAndTokenStorage(data.user, data.token);
        await contextCreateHeaderAndToken(data.user, data.token);
      }
    } catch (error) {
      throw error;
    } finally {
      setContextIsLoadingUser(false);
    }
  }

  async function contextSignOut() {
    try {
      setContextIsLoadingUser(true);
      setContextUser({} as UserDTO);
      await userRemoveStorage();
      await userRemoveTokenStorage();
    } catch (error) {
      throw error;
    } finally {
      setContextIsLoadingUser(false);
    }
  }

  async function contextLoadingUser() {
    try {
      setContextIsLoadingUser(true);
      const userLogged = await userShowStorage();
      const userToken = await userFindAuthTokenStotage();
      if (userLogged && userToken) {
        contextCreateHeaderAndToken(userLogged, userToken);
      }
    } catch (error) {
      throw error;
    } finally {
      setContextIsLoadingUser(false);
    }
  }

  useEffect(() => {
    contextLoadingUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        contextUser,
        contextSingIn,
        contextSignOut,
        contextIsLoadingUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
