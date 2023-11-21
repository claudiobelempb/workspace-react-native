import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';

export function CreateGroupScreen() {
  return (
    <ContainerTemplate justifyContent='flex-start'>
      <HeaderOrganism direction='space-between' isIcon />

      <ContentTemplate
        justifyContent='center'
        alingItems='center'
        minHeight={138}
        maxHeight={138}
        isHeight
        isWidth
        flex={1}
      >
        <SectionTurmaOrganism
          isIcon
          title='Nova Turma'
          description='crie uma turma para adicionar pessoas'
        />

        <BoxTemplate isWidth flex={2}>
          <TextInputAtom
            onChangeText={() => console.log('Text')}
            placeholder='Nome da turma'
            variantBackgroud='gray_700'
            isWidth
            minHeight={56}
            isBorderRadius
            padding={20}
            variantColor='gray_300'
            marginBottom={10}
          />
          <ButtonTextMolecule
            onPress={() => console.log('Create Turma')}
            variantBackgroud='green_500'
            variantColor='white'
            textAlign='center'
            title='Criar'
            isWidth
            minHeight={56}
            isBorderRadius
          />
        </BoxTemplate>
      </ContentTemplate>
    </ContainerTemplate>
  );
}
