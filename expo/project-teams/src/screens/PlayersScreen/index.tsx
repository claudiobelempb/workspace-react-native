import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { InputButtonMolecule } from '@molecules/InputButtonMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import SectionTurmaOrganism from '@organisms/SectionTurmaOrganism';

import { ButtonFilterTimeOrganism } from '@organisms/ButtonFilterTimeOrganism';
import { CardTimeOrganism } from '@organisms/CardTimeOrganism';
import { useRoute } from '@react-navigation/native';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerCreate } from '@storage/player/playerCreate';
import { playerFindById } from '@storage/player/playerFindById';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { AppError } from '@utils/AppError';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

type RouteParams = {
  group: string;
};

type PlayersScreenProps = {
  onActiveTeam: (value: string) => string;
};

export default function PlayersScreen() {
  const [teams, setTeams] = useState(['Time A', 'Time B', 'Time C']);
  const [team, setTeam] = useState('Time A');
  const [playerName, setPLayerName] = useState('');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const router = useRoute();
  const { group } = router.params as RouteParams;

  function handleActiveTeam(value: string) {
    setTeam(value);
  }

  async function handleAddPLayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.'
      );
    }

    const newPlayer = {
      name: playerName,
      team
    };

    try {
      await playerCreate(newPlayer, group);
      fetchPlayersFinalById();
      setPLayerName('');
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova Pessoa', 'Não foi possível adicionar');
      }
    }
  }

  async function fetchPlayersFinalById() {
    try {
      const playersByTeam = await playerFindById(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.'
      );
    }
  }

  useEffect(() => {
    fetchPlayersFinalById();
  }, [team]);

  return (
    <ContainerTemplate space={{ paddingY: 'm16px' }} flex={1}>
      <HeaderOrganism isIcon />

      <SectionTurmaOrganism
        title={group}
        description='adicione a galera e separe os times'
      />

      <InputButtonMolecule
        onChangeText={setPLayerName}
        onPress={handleAddPLayer}
        value={playerName}
      />

      <ButtonFilterTimeOrganism
        team={team}
        teams={teams}
        numberOfPlayes={players.length}
        onActiveTeam={handleActiveTeam}
      />

      <CardTimeOrganism players={players} />

      <ButtonTextMolecule
        onPress={() => console.log('PlayScreen')}
        variantColor='white'
        title=' Remover turma'
        isWidth
        variantBackgroud='red_900'
        isBorderRadius
        textAlign='center'
        minHeight={56}
        marginBottom={16}
      />
    </ContainerTemplate>
  );
}
