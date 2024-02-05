import {
  userCreateAuthTokenStorage,
  userFindAuthTokenStotage
} from '@storage/storageAuthToken';
import { AppError } from '@utils/AppError';
import Axios, { AxiosError, AxiosInstance } from 'axios';
import { Platform } from 'react-native';

const root = Platform.OS === 'ios' ? '127.0.0.1' : '192.168.122.1';
const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

type SignOut = () => void;

type PromiseType = {
  onSuccess: (token: string) => void;
  onFailuse: (error: AxiosError) => void;
};

type APIInstaceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

const api = Axios.create({
  baseURL: `http://${root}:3333`,
  withCredentials: true
}) as APIInstaceProps;

// const http = (config: AxiosRequestConfig) => {
//   const headers = config.withCredentials
//     ? {
//         ...config.headers,
//       }
//     : { ...config.headers };

//   return Axios({ ...config, baseURL: `http://${root}:3333`, headers });
// };

// api.interceptors.request.use(
//   config => {
//     console.log('Request: ', config.data);
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

let failedQueue: Array<PromiseType> = [];
let isRefreshing = false;

api.registerInterceptTokenManager = signOut => {
  const interceptTokenManager = api.interceptors.response.use(
    response => response,
    async requestError => {
      if (requestError?.response?.status === 401) {
        if (
          requestError.response.data?.message === 'token.expired' ||
          requestError.response.data?.message === 'token.invalid'
        ) {
          const { refresh_token } = await userFindAuthTokenStotage();

          if (!refresh_token) {
            signOut();
            return Promise.reject(requestError);
          }

          const originalRequestConfig = requestError.config;

          /*Colocando requisição na fila */
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({
                onSuccess: token => {
                  originalRequestConfig.headers = {
                    Authorization: `Bearer ${token}`
                  };
                  resolve(api(originalRequestConfig));
                },
                onFailuse: (error: AxiosError) => {
                  reject(error);
                }
              });
            });
          }

          isRefreshing = true;

          /*Buscando novo token */
          return new Promise(async (resolve, reject) => {
            try {
              const { data } = await api.post('/sessions/refresh-token', {
                refresh_token
              });

              await userCreateAuthTokenStorage({
                token: data.token,
                refresh_token: data.refresh_token
              });

              /*Reenviando a requisição */
              if (originalRequestConfig.data) {
                originalRequestConfig.data = JSON.parse(
                  originalRequestConfig.data
                );
              }

              originalRequestConfig.headers = {
                Authorization: `Bearer ${data.token}`
              };

              api.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${data.token}`;

              failedQueue.forEach(request => {
                request.onSuccess(data.token);
              });
              resolve(api(originalRequestConfig));
            } catch (error: any) {
              failedQueue.forEach(request => {
                request.onFailuse(error);
              });

              signOut();
              reject(error);
            } finally {
              isRefreshing = false;
              failedQueue = [];
            }
          });
        }
        signOut();
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message));
      } else {
        return Promise.reject(requestError);
      }
    }
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

export { api };
