import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { CardGroupOrganism } from '@organisms/CardGroupOrganism';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';

export function HomeScreen() {
  return (
    <ContainerTemplate flex={1} variantBackgroud='gray_600' padding={32}>
      <ContentTemplate flex={1}>
        <HeaderOrganism />
      </ContentTemplate>
      <ContentTemplate flex={1}>
        <SectionTurmaOrganism
          title='Turmas'
          description='jogue com a sua turma'
        />
      </ContentTemplate>

      <ContentTemplate flex={6}>
        <CardGroupOrganism />
      </ContentTemplate>

      <ContentTemplate flex={1} alingItems='flex-end' direction='row'>
        <ButtonTextMolecule
          onPress={() => console.log('Home')}
          variantBackgroud='green_500'
          variantColor='white'
          textAlign='center'
          padding={10}
        >
          Criar nova turma
        </ButtonTextMolecule>
      </ContentTemplate>
    </ContainerTemplate>
  );
}
