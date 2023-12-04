import { LoadingAtom } from '@atoms/LoadingAtom';
import { TextAtom } from '@atoms/TextAtom';
import { ButtonFilterTimeMolecule } from '@molecules/ButtonFilterTimeMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useState } from 'react';
import { FlatList } from 'react-native';

type Team = {
  name: string;
};

type Props = {
  numberOfPlayes?: number;
  teams?: string[];
  team: string;
  value?: string;
  onActiveTeam: (value: string) => void;
  active?: string;
  isLoading?: boolean;
} & typeDefault;

export function ButtonFilterTimeOrganism({
  numberOfPlayes,
  team,
  onActiveTeam,
  isLoading,
  ...props
}: Props) {
  const [teams, setTeams] = useState(['Time A', 'Time B', 'Time C']);

  return (
    <ContentTemplate direction='row' alingItems='center' marginBottom={16}>
      <FlatList
        data={teams}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <BoxTemplate direction='row' marginRight={16}>
            <ButtonFilterTimeMolecule
              title={item}
              isBorderRadius
              isActive={item === team}
              minHeight={38}
              space={{ padding: 's8px' }}
              isWidth
              textTransform='uppercase'
              onPress={() => onActiveTeam(item)}
            />
          </BoxTemplate>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={teams?.length === 0 && { flex: 1 }}
        horizontal
        ListEmptyComponent={() => (
          <ListEmpty
            variantColor='gray_300'
            mensagem='Que tal cadastrar a primeira turma?'
          />
        )}
      />
      <BoxTemplate
        minHeight={50}
        maxWidth={50}
        alingItems='center'
        justifyContent='center'
      >
        {isLoading ? <LoadingAtom /> : <TextAtom>{numberOfPlayes}</TextAtom>}
      </BoxTemplate>
    </ContentTemplate>
  );
}
