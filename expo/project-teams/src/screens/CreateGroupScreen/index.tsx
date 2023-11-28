import { TextInputAtom } from '@atoms/TextInputAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import SectionTurmaOrganism from '@organisms/SectionTurmaOrganism';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert } from 'react-native';

export default function CreateGroupScreen() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleCreateGroup() {
    try {
      if (group.trim().length === 0) {
        throw new AppError('Campo obrigatório!');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Group', error.message);
      } else {
        Alert.alert('Novo Group', 'Não foi posspível vriar um novo grupo.');
        console.log(error);
      }
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
