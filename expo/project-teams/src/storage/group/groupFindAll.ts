import AsyncStore from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupFindAll() {
  try {
    const storage = await AsyncStore.getItem(GROUP_COLLECTION);
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}
