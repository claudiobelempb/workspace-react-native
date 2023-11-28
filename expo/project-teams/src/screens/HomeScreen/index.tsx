import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import CardGroupOrganism from '@organisms/CardGroupOrganism';
import { HeaderOrganism } from '@organisms/HeaderOrganism';
import SectionTurmaOrganism from '@organisms/SectionTurmaOrganism';
import { useNavigation } from '@react-navigation/native';
import { ContainerTemplate } from '@templates/ContainerTemplate';

export default function HomeScreen() {
  const navigation = useNavigation();

  function handleCreateGroup() {
    navigation.navigate('create');
  }

  return (
    <ContainerTemplate space={{ paddingY: 'm16px' }} flex={1}>
      <HeaderOrganism />

      <SectionTurmaOrganism
        title='Turmas'
        description='jogue com a sua turma'
      />

      <CardGroupOrganism />

      <ButtonTextMolecule
        onPress={handleCreateGroup}
        variantBackgroud='green_500'
        variantColor='white'
        textAlign='center'
        title='Criar nova turma'
        minHeight={56}
        isBorderRadius
        isWidth
        marginBottom={16}
      />
    </ContainerTemplate>
  );
}
