import { CardGroupMolecule } from '@molecules/CardGroupMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';
import { FlatList } from 'react-native';

type Group = {
  groupId: string;
  name: string;
};

export function CardGroupOrganism() {
  const [groups, setGroups] = useState<Group[]>([
    { groupId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', name: 'First Item' },
    { groupId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', name: 'Second Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e29d72', name: 'Third Item' }
  ]);

  return (
    <FlatList
      data={groups}
      renderItem={item => (
        <ContentTemplate marginBottom={10} isWidth direction='row'>
          <CardGroupMolecule
            onPress={() => console.log('CardGroupOrganism')}
            title={item.item.name}
          />
        </ContentTemplate>
      )}
      keyExtractor={item => item.groupId}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={groups.length === 0 && { flex: 1 }}
      ListEmptyComponent={() => (
        <ListEmpty
          variantColor='gray_300'
          mensagem='Que tal cadastrar a primeira turma?'
        />
      )}
    />
  );
}
