import { CardGroupMolecule } from '@molecules/CardGroupMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';
import { FlatList } from 'react-native';

type Players = {
  playerId: string;
  name: string;
};

export function CardGroupOrganism() {
  const [players, setPlayers] = useState<Players[]>([
    { playerId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', name: 'First Item' },
    { playerId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', name: 'Second Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e29d74', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e29d12', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e39d72', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571d29d72', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e29d32', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e29d22', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e89d72', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571c22d72', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e29d72', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571e26d72', name: 'Third Item' },
    { playerId: '58694a0f-3da1-471f-bd96-145571429d75', name: 'Third Item' }
  ]);

  return (
    <FlatList
      data={players}
      renderItem={item => (
        <ContentTemplate marginBottom={10} isWidth direction='row'>
          <CardGroupMolecule
            onPress={() => console.log('CardGroupOrganism')}
            title={item.item.name}
          />
        </ContentTemplate>
      )}
      keyExtractor={item => item.playerId}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        players.length === 0 && { flex: 1 },
        { paddingBottom: 30 }
      ]}
      ListEmptyComponent={() => (
        <ListEmpty
          variantColor='gray_300'
          mensagem='Que tal cadastrar a primeira turma?'
        />
      )}
    />
  );
}
