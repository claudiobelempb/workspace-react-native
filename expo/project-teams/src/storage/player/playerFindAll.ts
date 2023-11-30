import AsyncStore from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function PlayerFindAll(group: string) {
  try {
    const storage = await AsyncStore.getItem(`${PLAYER_COLLECTION}-${group}`);

    const playes: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return playes;
  } catch (error) {
    throw error;
  }
}
