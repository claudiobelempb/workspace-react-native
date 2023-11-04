import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { TextDefault } from '../../atoms/TextDefault';
import { FormDefault } from '../../molecules/FormDefault';
import { HeaderDefault } from '../../molecules/HeaderDefault';
import { ParticipantDefault } from '../../molecules/ParticipantDefault';

type Participant = string[];

type Event = {
  title: string;
  data: string;
};
export function Home() {
  const [event, setEvent] = useState<Event>({
    title: 'Show na Praia',
    data: 'Sext, 4 de Novembro de 2022.'
  });

  const [participants, setParticipants] = useState<Participant>([]);

  const { title, data } = event;
  const [name] = participants;

  function handleParticipantAdd() {
    if (participants.includes('Joca')) {
      return Alert.alert(
        'Participante existe',
        `Já existe um participante na lista com esse nome.`
      );
    }
    setParticipants(prevState => [...prevState, 'Joca']);
    console.warn(participants);
  }

  function handleParticipantRemove(participant: string) {
    return Alert.alert('Remover', `Remover o participante ${participant}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <>
      <HeaderDefault title={title} data={data} />
      <FormDefault onParticipantAdd={handleParticipantAdd} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ParticipantDefault
            name={item}
            onParticipantRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <>
            <TextDefault
              variant='#FFF'
              title='Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.'
            />
          </>
        )}
      />
    </>
  );
}
