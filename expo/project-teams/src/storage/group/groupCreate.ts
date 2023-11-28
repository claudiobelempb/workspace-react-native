import AsyncStore from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTIO } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { groupFindAll } from './groupFindAll';

export async function groupCreate(group: string) {
  try {
    const groups = await groupFindAll();

    const groupAlreadyExist = groups.includes(group);

    if (groupAlreadyExist) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    const storage = JSON.stringify([...groups, group]);

    await AsyncStore.setItem(GROUP_COLLECTIO, storage);
  } catch (error) {
    throw error;
  }
}
