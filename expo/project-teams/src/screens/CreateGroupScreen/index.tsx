import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import SectionTurmaOrganism from '@organisms/SectionTurmaOrganism';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { useState } from 'react';

export default function CreateGroupScreen() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleCreateGroup() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <ContainerTemplate space={{ paddingY: 'm16px' }} flex={1}>
      <HeaderOrganism isIcon />

      <SectionTurmaOrganism
        isIcon
        title='Nova Turma'
        description='crie uma turma para adicionar pessoas'
      />

      <TextInputAtom
        onChangeText={setGroup}
        placeholder='Nome da turma'
        variantBackgroud='gray_700'
        isWidth
        minHeight={56}
        isBorderRadius
        space={{ padding: 's12px' }}
        variantColor='gray_300'
        marginBottom={10}
      />
      <ButtonTextMolecule
        onPress={handleCreateGroup}
        variantBackgroud='green_500'
        variantColor='white'
        textAlign='center'
        title='Criar'
        isWidth
        minHeight={56}
        isBorderRadius
      />
    </ContainerTemplate>
  );
}
