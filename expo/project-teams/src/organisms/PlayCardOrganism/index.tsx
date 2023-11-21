import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';
import { FlatList } from 'react-native';

type Props = {
  countPlayers: number;
};

export function PlayCardOrganism({ countPlayers }: Props) {
  const [team, setTeam] = useState('Time A');

  return (
    <ContentTemplate direction='row'>
      <FlatList
        data={['Time A', 'Time B', 'Time C']}
        keyExtractor={item => item}
        renderItem={item => (
          <BoxTemplate
            alingItems='center'
            width={70}
            columnGap={5}
            variantBackgroud='black'
          >
            <ButtonTouchableOpacityAton title='Novo' />
            <TextAtom>text</TextAtom>
          </BoxTemplate>
        )}
        horizontal
      />

      <BoxTemplate
        width={56}
        height={56}
        alingItems='center'
        justifyContent='center'
      >
        <TextAtom fontSize='s14' textAlign='right' variantColor='white'>
          {countPlayers}
        </TextAtom>
      </BoxTemplate>
    </ContentTemplate>
  );
}
