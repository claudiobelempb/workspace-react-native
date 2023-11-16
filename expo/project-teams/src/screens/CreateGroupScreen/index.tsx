import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';

export function CreateGroupScreen() {
  return (
    <ContainerTemplate flex={1} paddingLeft={24} paddingRight={24}>
      <ContentTemplate flex={1} marginTop={20}>
        <HeaderOrganism direction='space-between' isIcon />
      </ContentTemplate>
      <ContentTemplate flex={1}>
        <SectionTurmaOrganism
          isIcon
          title='Nova Turma'
          description='crie uma turma para adicionar pessoas'
        />
      </ContentTemplate>
      <ContentTemplate flex={2} rowGap={16}>
        <TextInputAtom
          onChangeText={() => console.log('Text')}
          placeholder='Nome da turma'
          placeholderTextColor={'#7C7C8A'}
          variantBackgroud='gray_700'
        />
        <ButtonTextMolecule
          onPress={() => console.log('Create Turma')}
          variantBackgroud='green_500'
          variantColor='white'
          textAlign='center'
          justifyContent='center'
          height={56}
        >
          Criar
        </ButtonTextMolecule>
      </ContentTemplate>
    </ContainerTemplate>
  );
}
