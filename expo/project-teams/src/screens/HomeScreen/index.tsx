import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { CardTurmaOrganism } from '@organisms/CardTurmaOrganism';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { SectionTemplate } from '@templates/SectionTemplate';

export function HomeScreen() {
  return (
    <ContainerTemplate>
      <HeaderOrganism />
      <SectionTemplate>
        <SectionTurmaOrganism
          isIcon={false}
          title='Turmas'
          description='jogue com a sua turma'
        />
      </SectionTemplate>
      <CardTurmaOrganism />
      <ButtonTouchableOpacityAton
        title='Criar nova turma'
        onPress={() => console.log('onPress')}
      />
    </ContainerTemplate>
  );
}
