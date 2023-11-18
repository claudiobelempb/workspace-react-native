import { TextAton } from '@atoms/TextAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { BoxTemplate } from '@templates/BoxTemplate';
import { useState } from 'react';
import { FlatList } from 'react-native';

type Props = {
  countPlayers: number;
};

export function TimesModule({ countPlayers }: Props) {
  const [team, setTeam] = useState('Time A');

  return (
    <BoxTemplate direction='row' alingItems='center'>
      <FlatList
        data={['Time A', 'Time B', 'Time C']}
        keyExtractor={item => item}
        renderItem={item => (
          <ButtonTextMolecule
            direction='row'
            width={70}
            minHeight={40}
            maxHeight={40}
            onPress={() => setTeam(item.item)}
            isActive={item.item === team}
            title={item.item}
            textAlign='center'
            textTransform='uppercase'
            fontSize='s14'
          />
        )}
        horizontal
      />

      <BoxTemplate
        direction='row'
        width={56}
        height={56}
        alingItems='center'
        justifyContent='center'
      >
        <TextAton fontSize='s14' textAlign='right' variantColor='white'>
          {countPlayers}
        </TextAton>
      </BoxTemplate>
    </BoxTemplate>
  );
}
