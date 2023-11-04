import { Alert, FlatList } from 'react-native';
import { TextDefault } from '../../atoms/TextDefault';
import { FormDefault } from '../../molecules/FormDefault';
import { HeaderDefault } from '../../molecules/HeaderDefault';
import { ParticipantDefault } from '../../molecules/ParticipantDefault';

type Participant = {
  name: string;
};
type Event = {
  event: {
    name: string;
    data: Date;
    participants: Participant[];
  };
};
export function Home() {
  const event = {
    name: 'Show na Praia',
    data: 'Sext, 4 de Novembro de 2022.',
    participants: [
      'Cláudio Cardoso',
      'Kaike Cardoso',
      'Kevin Cardoso',
      'Gorete Cardoso',
      'Jorge Santos',
      'João Rodrigues',
      'Rodrigo Gonçalves',
      'Laura silva',
      'Jaqueline Snatos'
    ]
  };

  function handleParticipantAdd() {
    Alert.alert('Alert');
  }

  function handleParticipantRemove(participant: string) {
    Alert.alert(`Alert ${participant}`);
  }

  return (
    <>
      <HeaderDefault title={event.name} data={event.data} />
      <FormDefault onParticipantAdd={handleParticipantAdd} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={event.participants}
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
