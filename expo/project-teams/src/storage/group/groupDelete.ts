import AsyncStore from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupFindAll } from './groupFindAll';

export async function groupDelete(groupId: string) {
  try {
    const storage = await groupFindAll();
    const groups = storage.filter(group => group !== groupId);
    const group = JSON.stringify(groups);

    await AsyncStore.setItem(GROUP_COLLECTION, group);
    await AsyncStore.removeItem(`${PLAYER_COLLECTION}-${groupId}`);
  } catch (error) {
    throw error;
  }
}
