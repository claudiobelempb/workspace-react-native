import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_AUTH } from './key';

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
};
export async function userCreateAuthTokenStorage({
  token,
  refresh_token
}: StorageAuthTokenProps) {
  await AsyncStorage.setItem(
    KEY_AUTH,
    JSON.stringify({ token, refresh_token })
  );
}

export async function userFindAuthTokenStotage() {
  const response = await AsyncStorage.getItem(KEY_AUTH);
  const { token, refresh_token }: StorageAuthTokenProps = response
    ? JSON.parse(response)
    : {};
  return { token, refresh_token };
}

export async function userRemoveTokenStorage() {
  await AsyncStorage.removeItem(KEY_AUTH);
}
