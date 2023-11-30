import { PlayerFindAll } from './playerFindAll';

export async function playerFindById(group: string, team: string) {
  try {
    const storage = await PlayerFindAll(group);
    const players = storage.filter(player => player.team === team);
    return players;
  } catch (error) {
    throw error;
  }
}
