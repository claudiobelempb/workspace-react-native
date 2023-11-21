import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { CardGroupOrganism } from '@organisms/CardGroupOrganism';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export function HomeScreen() {
  return (
    <ContainerTemplate>
      <HeaderOrganism />

      <SectionTurmaOrganism
        title='Turmas'
        description='jogue com a sua turma'
      />

      <CardGroupOrganism />

      <ButtonTextMolecule
        onPress={() => console.log('Home')}
        variantBackgroud='green_500'
        variantColor='white'
        textAlign='center'
        title='Criar nova turma'
        isWidth
        minHeight={56}
        isBorderRadius
      />
    </ContainerTemplate>
  );
}
