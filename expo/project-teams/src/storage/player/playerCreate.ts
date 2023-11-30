import AsyncStore from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PlayerFindAll } from './playerFindAll';

export async function playerCreate(player: PlayerStorageDTO, group: string) {
  try {
    const storedPLayers = await PlayerFindAll(group);

    const playerAlreadyExists = storedPLayers.filter(
      resp => resp.name === player.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adiciona em time aqui.');
    }

    const storage = JSON.stringify([...storedPLayers, player]);

    await AsyncStore.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
