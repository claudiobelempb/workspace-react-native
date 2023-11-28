import AsyncStore from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTIO } from '@storage/storageConfig';

export async function groupFindAll() {
  try {
    const storage = await AsyncStore.getItem(GROUP_COLLECTIO);
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}
