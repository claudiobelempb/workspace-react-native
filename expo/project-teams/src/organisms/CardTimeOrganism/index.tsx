import { CardTimeMolecule } from '@molecules/CardTimeMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useState } from 'react';
import { FlatList } from 'react-native';

type Group = {
  groupId: string;
  name: string;
};

type CardTimeOrganismProps = {
  data: Group[];
} & typeDefault;

export function CardTimeOrganism({ ...props }: CardTimeOrganismProps) {
  const [groups, setGroups] = useState<Group[]>([
    { groupId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', name: 'First Item' },
    { groupId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', name: 'Second Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e29d74', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e29d12', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e39d72', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571d29d72', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e29d32', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e29d22', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e89d72', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571c22d72', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e29d72', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571e26d72', name: 'Third Item' },
    { groupId: '58694a0f-3da1-471f-bd96-145571429d75', name: 'Third Item' }
  ]);
  return (
    <ContentTemplate flex={1}>
      <FlatList
        data={props.data}
        keyExtractor={item => item.groupId}
        renderItem={({ item }) => (
          <BoxTemplate direction='row'>
            <CardTimeMolecule
              name={item.name}
              onPress={() => console.log('CardTimeOrganism')}
            />
          </BoxTemplate>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            variantColor='gray_300'
            mensagem='Que tal cadastrar a primeira turma?'
          />
        )}
      />
    </ContentTemplate>
  );
}
