import { CardTimeMolecule } from '@molecules/CardTimeMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { FlatList } from 'react-native';

type Players = {
  playerId: string;
  name: string;
};

type CardTimeOrganismProps = {
  data: Players[];
} & typeDefault;

export function CardTimeOrganism({ ...props }: CardTimeOrganismProps) {
  return (
    <ContentTemplate flex={1}>
      <FlatList
        data={props.data}
        keyExtractor={item => item.playerId}
        renderItem={({ item }) => (
          <BoxTemplate direction='row'>
            <CardTimeMolecule
              name={item.name}
              onRemovePlayer={() => console.log('onRemovePlayer')}
            />
          </BoxTemplate>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          props.data.length === 0 && { flex: 1 },
          { paddingBottom: 30 }
        ]}
        ListEmptyComponent={() => (
          <ListEmpty
            variantColor='gray_300'
            mensagem='adicione a galera e separe os times'
          />
        )}
      />
    </ContentTemplate>
  );
}
