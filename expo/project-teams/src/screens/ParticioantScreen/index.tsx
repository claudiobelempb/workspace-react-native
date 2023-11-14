import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { InputButtonMolecule } from '@molecules/InputButtonMolecule';
import { TimesModule } from '@molecules/TimesModule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { BoxOneTemplate } from '@templates/BoxOneTemplate';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function ParticipantScreen() {
  return (
    <ContainerTemplate>
      <HeaderOrganism isIcon />

      <BoxOneTemplate>
        <SectionTurmaOrganism
          isIcon
          title='Nome da turma'
          description='adicione a galera e separe os times'
        />
      </BoxOneTemplate>
      <InputButtonMolecule />

      <TimesModule />

      <ButtonTouchableOpacityAton
        width={100}
        unit='%'
        title='Remover turma'
        variantBackgroud='red_900'
      />
    </ContainerTemplate>
  );
}
