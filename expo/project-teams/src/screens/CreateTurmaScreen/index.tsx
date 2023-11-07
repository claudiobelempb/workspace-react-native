import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import { SectionTurmaOrganism } from '@organisms/SectionTurmaOrganism';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { FormTemplate } from '@templates/FormTemplate ';
import { SectionTemplate } from '@templates/SectionTemplate';

export function CreateTurmaScreen() {
  return (
    <ContainerTemplate>
      <HeaderOrganism />
      <ContentTemplate>
        <SectionTemplate>
          <SectionTurmaOrganism
            isIcon
            title='Nova Turma'
            description='crie uma turma para adicionar pessoas'
          />
        </SectionTemplate>
        <FormTemplate>
          <TextInputAtom
            onChangeText={() => console.log('Text')}
            value=''
            placeholder='Nome da turma'
            placeholderTextColor={'#7C7C8A'}
          />
          <ButtonTouchableOpacityAton
            title='Criar'
            onPress={() => console.log('onPress')}
          />
        </FormTemplate>
      </ContentTemplate>
    </ContainerTemplate>
  );
}
