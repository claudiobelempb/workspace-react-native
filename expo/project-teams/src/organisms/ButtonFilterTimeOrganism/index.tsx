import { TextAtom } from '@atoms/TextAtom';
import { ButtonFilterTimeMolecule } from '@molecules/ButtonFilterTimeMolecule';
import { ListEmpty } from '@molecules/ListEmpty';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';
import { FlatList } from 'react-native';

type Props = {
  numberOfPlayes: number;
};

export function ButtonFilterTimeOrganism({ numberOfPlayes }: Props) {
  const [times, setTimes] = useState(['Time A', 'Time B']);
  const [isActive, setIsActive] = useState('Time A');

  return (
    <ContentTemplate direction='row' alingItems='center' marginBottom={16}>
      <FlatList
        data={times}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <BoxTemplate direction='row' marginRight={16}>
            <ButtonFilterTimeMolecule
              title={item}
              isBorderRadius
              isActive={item === isActive}
              minHeight={38}
              space={{ padding: 's8px' }}
              onPress={() => setIsActive(item)}
              isWidth
              textTransform='uppercase'
            />
          </BoxTemplate>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={times.length === 0 && { flex: 1 }}
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
        <TextAtom>{numberOfPlayes}</TextAtom>
      </BoxTemplate>
    </ContentTemplate>
  );
}
