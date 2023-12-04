import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { InputButtonMolecule } from '@molecules/InputButtonMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import SectionTurmaOrganism from '@organisms/SectionTurmaOrganism';

import { LoadingAtom } from '@atoms/LoadingAtom';
import { ButtonFilterTimeOrganism } from '@organisms/ButtonFilterTimeOrganism';
import { CardTimeOrganism } from '@organisms/CardTimeOrganism';
import { useNavigation, useRoute } from '@react-navigation/native';
import { groupDelete } from '@storage/group/groupDelete';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerCreate } from '@storage/player/playerCreate';
import { playerDelete } from '@storage/player/playerDelete';
import { playerFindById } from '@storage/player/playerFindById';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { AppError } from '@utils/AppError';
import { useEffect, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';

type RouteParams = {
  group: string;
};

type PlayersScreenProps = {
  onActiveTeam: (value: string) => string;
};

export default function PlayersScreen() {
  const [team, setTeam] = useState('Time A');
  const [playerName, setPLayerName] = useState('');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [isLoading, setIsloading] = useState(true);

  const router = useRoute();
  const { group } = router.params as RouteParams;

  const nameInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

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
      nameInputRef.current?.blur();
      setPLayerName('');
      fetchPlayersFinalById();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova Pessoa', 'Não foi possível adicionar');
      }
    }
  }

  async function handlePlayerDelete(playerName: string) {
    try {
      playerDelete(playerName, group);
      fetchPlayersFinalById();
    } catch (error) {
      console.log(error);
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
    }
  }

  async function groupRemove() {
    try {
      await groupDelete(group);
      navigation.navigate('home');
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível remover o group.');
    }
  }

  async function handleGroupDelete() {
    Alert.alert('Remove', `Deseja remover o group?. ${group}`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => groupRemove() }
    ]);
  }

  async function fetchPlayersFinalById() {
    try {
      setIsloading(true);
      const playersByTeam = await playerFindById(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.'
      );
    } finally {
      setIsloading(false);
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
        inputRef={nameInputRef}
        autoCorrect={false}
        onSubmitEditing={handleAddPLayer}
        returnKeyType='done'
      />

      <ButtonFilterTimeOrganism
        team={team}
        numberOfPlayes={players.length}
        onActiveTeam={handleActiveTeam}
        isLoading={isLoading}
      />

      {isLoading ? (
        <LoadingAtom size={'large'} />
      ) : (
        <CardTimeOrganism
          players={players}
          onPlayerDelete={handlePlayerDelete}
        />
      )}

      <ButtonTextMolecule
        onPress={handleGroupDelete}
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
