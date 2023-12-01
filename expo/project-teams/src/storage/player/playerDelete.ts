import AsyncStore from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerFindAll } from './playerFindAll';

export async function playerDelete(playerName: string, group: string) {
  try {
    const storage = await PlayerFindAll(group);
    const filtered = storage.filter(player => player.name !== playerName);
    const players = JSON.stringify(filtered);

    await AsyncStore.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
}
