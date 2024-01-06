import { createContext, ReactNode } from 'react';
import { UserDTO } from 'src/dtos/UserDTO';

export type AuthContextProps = {
  user: UserDTO;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          userId: '1',
          name: 'Claudio Cardoso',
          email: 'claudio.c.lima@hotmail.com',
          avatar: 'claudio.png'
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
