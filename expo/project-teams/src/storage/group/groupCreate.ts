import AsyncStore from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTIO } from '@storage/storageConfig';
import { groupFindAll } from './groupFindAll';

export async function groupCreate(group: string) {
  try {
    const groups = await groupFindAll();
    const storage = JSON.stringify([...groups, group]);

    await AsyncStore.setItem(GROUP_COLLECTIO, storage);
  } catch (error) {
    throw error;
  }
}
