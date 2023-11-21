import { TextAtom } from '@atoms/TextAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

type Props = {
  countPlayers: number;
};

export function TimesModule({ countPlayers }: Props) {
  const [team, setTeam] = useState('Time A');

  return (
    <ContentTemplate direction='row' marginBottom={24}>
      <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={item => (
          <ButtonTextMolecule
            alingItems='center'
            width={70}
            minHeight={38}
            onPress={() => setTeam(item.item)}
            isActive={item.item === team}
            title={item.item}
            textAlign='center'
            textTransform='uppercase'
            fontSize='s14'
            padding={5}
            isBorderRadius
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ margin: 5, flexGrow: 1 }} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <BoxTemplate
        padding={10}
        width={56}
        alingItems='center'
        justifyContent='center'
      >
        <TextAtom
          fontSize='s14'
          textAlign='right'
          fontWeigh='700'
          variantColor='white'
        >
          {countPlayers}
        </TextAtom>
      </BoxTemplate>
    </ContentTemplate>
  );
}
