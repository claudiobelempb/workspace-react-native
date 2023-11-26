import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { InputButtonMolecule } from '@molecules/InputButtonMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import SectionTurmaOrganism from '@organisms/SectionTurmaOrganism';

import { ButtonFilterTimeOrganism } from '@organisms/ButtonFilterTimeOrganism';
import { CardTimeOrganism } from '@organisms/CardTimeOrganism';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { useState } from 'react';

type Players = {
  playerId: string;
  name: string;
};

type PlayersScreenProps = {};

export default function PlayersScreen({}: PlayersScreenProps) {
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
    <ContainerTemplate space={{ paddingY: 'm16px' }} flex={1}>
      <HeaderOrganism isIcon />

      <SectionTurmaOrganism
        title='Nome da turma'
        description='adicione a galera e separe os times'
      />

      <InputButtonMolecule />

      <ButtonFilterTimeOrganism numberOfPlayes={players.length} />

      <CardTimeOrganism
        data={players}
        onPress={() => console.log('PlayersScreen')}
      />

      <ButtonTextMolecule
        onPress={() => console.log('PlayScreen')}
        variantColor='white'
        title=' Remover turma'
        isWidth
        variantBackgroud='red_900'
        isBorderRadius
        textAlign='center'
        minHeight={56}
      />
    </ContainerTemplate>
  );
}
