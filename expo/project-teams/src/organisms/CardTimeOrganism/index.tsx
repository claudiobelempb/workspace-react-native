import { CardTimeMolecule } from '@molecules/CardTimeMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { FlatList } from 'react-native';

type CardTimeOrganismProps = {
  players?: PlayerStorageDTO[];
  onPlayerDelete: (playerName: string) => void;
} & typeDefault;

export function CardTimeOrganism({
  players,
  onPlayerDelete,
  ...props
}: CardTimeOrganismProps) {
  return (
    <ContentTemplate flex={1}>
      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <BoxTemplate direction='column'>
            <CardTimeMolecule
              name={item.name}
              onPress={() => onPlayerDelete(item.name)}
            />
          </BoxTemplate>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          players?.length === 0 && { flex: 1 },
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
