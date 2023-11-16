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

export function ParticipantScreen() {
  return (
    <ContainerTemplate flex={1} padding={20}>
      <ContentTemplate marginTop={15}>
        <HeaderOrganism isIcon />
      </ContentTemplate>

      <ContentTemplate marginBottom={15}>
        <SectionTurmaOrganism
          isIcon
          title='Nome da turma'
          description='adicione a galera e separe os times'
        />
      </ContentTemplate>
      <ContentTemplate marginBottom={15}>
        <InputButtonMolecule />
      </ContentTemplate>

      <ContentTemplate marginBottom={15}>
        <TimesModule />
      </ContentTemplate>
      <ContentTemplate marginBottom={15} flex={1}>
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
      <ContentTemplate marginBottom={10}>
        <ButtonTextMolecule
          onPress={() => console.log('Participant')}
          variantBackgroud='green_500'
          variantColor='white'
          textAlign='center'
          padding={5}
        >
          Remover turma
        </ButtonTextMolecule>
      </ContentTemplate>
    </ContainerTemplate>
  );
}
