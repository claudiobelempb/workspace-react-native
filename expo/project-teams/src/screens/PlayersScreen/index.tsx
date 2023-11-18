import { FlatListAtom } from '@atoms/FlatListAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { InputButtonMolecule } from '@molecules/InputButtonMolecule';
import { TimesModule } from '@molecules/TimesModule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { BoxTemplate } from '@templates/BoxTemplate';

import { IconTextButtonMolecule } from '@molecules/IconTextButtonMolecule';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';

export function PlayersScreen() {
  const [players, setPlayers] = useState([
    'Kaike',
    'Kevin',
    'Gorete',
    'Cláudio'
  ]);

  return (
    <ContainerTemplate flex={1} padding={20} rowGap={10}>
      <ContentTemplate>
        <HeaderOrganism isIcon />
      </ContentTemplate>
      <ContentTemplate>
        <SectionTurmaOrganism
          isIcon
          title='Nome da turma'
          description='adicione a galera e separe os times'
        />
      </ContentTemplate>
      <ContentTemplate>
        <InputButtonMolecule />
      </ContentTemplate>

      <ContentTemplate>
        <TimesModule countPlayers={players.length} />
      </ContentTemplate>
      <ContentTemplate flex={1}>
        <FlatListAtom
          data={[1]}
          renderItem={item => (
            <BoxTemplate rowGap={16}>
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
              <IconTextButtonMolecule title='Rodrigo Gonçalves' />
            </BoxTemplate>
          )}
        />
      </ContentTemplate>
      <ContentTemplate>
        <ButtonTextMolecule
          onPress={() => console.log('Participant')}
          variantBackgroud='green_500'
          variantColor='white'
          textAlign='center'
          title=' Remover turma'
          minHeight={56}
        />
      </ContentTemplate>
    </ContainerTemplate>
  );
}
