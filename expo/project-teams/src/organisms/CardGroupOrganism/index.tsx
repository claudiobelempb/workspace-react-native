import { IconAtom } from '@atoms/IconAtom';
import { LoadingAtom } from '@atoms/LoadingAtom';
import { TextAtom } from '@atoms/TextAtom';
import CardGroupMolecule from '@molecules/CardGroupMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupFindAll } from '@storage/group/groupFindAll';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';

type PlayersProps = {
  playerId: string;
  playerName: string;
};

type Props = {
  players?: PlayersProps;
} & typeDefault;

export default function CardGroupOrganism({ ...props }: Props) {
  const [isLoading, setIsloading] = useState(true);
  const [groups, setGroups] = useState<string[]>([
    // {
    //   playerId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   playerName: 'First Item'
    // },
    // {
    //   playerId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //   playerName: 'Second Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e29d74',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e29d12',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e39d72',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571d29d72',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e29d32',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e29d22',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e89d72',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571c22d72',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e29d72',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571e26d72',
    //   playerName: 'Third Item'
    // },
    // {
    //   playerId: '58694a0f-3da1-471f-bd96-145571429d75',
    //   playerName: 'Third Item'
    // }
  ]);

  const navigation = useNavigation();

  const { variant } = useTheme();

  async function fetchGroup() {
    try {
      setIsloading(true);
      const data = await groupFindAll();
      setGroups(data);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsloading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroup();
    }, [])
  );

  return (
    <ContentTemplate flex={1}>
      {isLoading ? (
        <LoadingAtom size={'large'} />
      ) : (
        <FlatList
          data={groups}
          renderItem={({ item }) => (
            <CardGroupMolecule isWidth onPress={() => handleOpenGroup(item)}>
              <IconAtom
                family='Feather'
                nameFeather='user'
                size={30}
                color={variant.green_700}
              />
              <TextAtom>{item}</TextAtom>
            </CardGroupMolecule>
          )}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            groups.length === 0 && { flex: 1 },
            { paddingBottom: 30 }
          ]}
          ListEmptyComponent={() => (
            <ListEmpty
              variantColor='gray_300'
              mensagem='Que tal cadastrar a primeira turma?'
            />
          )}
        />
      )}
    </ContentTemplate>
  );
}
