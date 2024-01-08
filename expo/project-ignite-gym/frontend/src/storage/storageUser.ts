import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDTO } from 'src/dtos/UserDTO';
import { KEY_USER } from './key';

export async function storageUserSave(user: UserDTO) {
  await AsyncStorage.setItem(KEY_USER, JSON.stringify(user));
}

export async function userShow() {
  const storage = await AsyncStorage.getItem(KEY_USER);
  const user: UserDTO = storage ? JSON.parse(storage) : {};
  return user;
}

export async function userRemove() {
  await AsyncStorage.removeItem(KEY_USER);
}
