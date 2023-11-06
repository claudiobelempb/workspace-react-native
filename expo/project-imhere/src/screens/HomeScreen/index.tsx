import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { ButtonTouchableOpacityAton } from '../../atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '../../atoms/TextAtom';
import { TextInputAtom } from '../../atoms/TextInputAtom';
import { HeaderOrganisms } from '../../organisms/HeaderOrganism';
import { ParticipantOrganisms } from '../../organisms/ParticipantOrganism';
import { ContainerTemplate } from '../../templates/ContainerTemplate';
import { FormTemplate } from '../../templates/FormTemplate';

type Participant = string[];

type Event = {
  title: string;
  data: string;
};
export function HomeScreen() {
  const [event, setEvent] = useState<Event>({
    title: 'Show na Praia',
    data: 'Sext, 4 de Novembro de 2022.'
  });

  const [participants, setParticipants] = useState<Participant>([]);
  const [participantName, setParticipantName] = useState('');

  const { title, data } = event;
  const [name] = participants;

  function handleParticipantAdd() {
    if (participantName === '') {
      return Alert.alert(
        'Campo obrigatório',
        `O campo tem que ser preenchido.`
      );
    }
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante existe',
        `Já existe um participante na lista com esse nome.`
      );
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    return Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipants(prevState =>
            prevState.filter(particioant => particioant !== name)
          )
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <ContainerTemplate>
      <HeaderOrganisms title={title} data={data} />
      <FormTemplate>
        <TextInputAtom
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />
        <ButtonTouchableOpacityAton title='+' onPress={handleParticipantAdd} />
      </FormTemplate>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ParticipantOrganisms
            name={item}
            onParticipantRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <>
            <TextAton
              aling='center'
              variant='#FFF'
              title='Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.'
            />
          </>
        )}
      />
    </ContainerTemplate>
  );
}
