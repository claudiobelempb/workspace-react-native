import InconTurma from '@assets/Icons.png';
import { FlatListAtom } from '@atoms/FlatListAtom';
import { ButtonImageMolecule } from '@molecules/ButtonImageMolecule';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { BoxTemplate } from '@templates/BoxTemplate';
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
      <ContentTemplate flex={5}>
        <FlatListAtom
          data={[1]}
          renderItem={item => (
            <BoxTemplate rowGap={16}>
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
              <ButtonImageMolecule
                source={InconTurma}
                width={32}
                height={32}
                title='Nome da turma'
              />
            </BoxTemplate>
          )}
        />
      </ContentTemplate>

      <ContentTemplate flex={1} alingItems='flex-end' direction='row'>
        <ButtonTextMolecule
          onPress={() => console.log('Home')}
          variantBackgroud='green_500'
          variantColor='white'
          textAlign='center'
          height={56}
        >
          Criar nova turma
        </ButtonTextMolecule>
      </ContentTemplate>
    </ContainerTemplate>
  );
}
