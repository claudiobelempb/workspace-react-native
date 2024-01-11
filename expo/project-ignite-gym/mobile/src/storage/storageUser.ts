import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDTO } from 'src/dtos/UserDTO';
import { KEY_USER } from './key';

export async function userCreateStorage(user: UserDTO) {
  await AsyncStorage.setItem(KEY_USER, JSON.stringify(user));
}

export async function userShowStorage() {
  const storage = await AsyncStorage.getItem(KEY_USER);
  const user: UserDTO = storage ? JSON.parse(storage) : {};
  return user;
}

export async function userRemoveStorage() {
  await AsyncStorage.removeItem(KEY_USER);
}
