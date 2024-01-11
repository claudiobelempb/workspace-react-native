import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_AUTH } from './key';

export async function userCreateAuthTokenStorage(token: string) {
  await AsyncStorage.setItem(KEY_AUTH, token);
}

export async function userFindAuthTokenStotage() {
  const token = await AsyncStorage.getItem(KEY_AUTH);
  return token;
}

export async function userRemoveTokenStorage() {
  await AsyncStorage.removeItem(KEY_AUTH);
}
