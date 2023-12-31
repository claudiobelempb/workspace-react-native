import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import React from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';
import { CardHomeMolecules } from './CardHomeMolecules';
import { ListEmptyMolecules } from './ListEmptyMolecules';

type Props = {
  exercises: ExerciseDTO[];
};
export function HomeFlatListMolecules({ exercises }: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  function handleExerciseScreen() {
    navigation.navigate('exercise');
  }

  const keyExtractor = (item: ExerciseDTO) => item.exerciseId;

  const Item = (exercise: ExerciseDTO) => (
    <CardHomeMolecules
      onPress={handleExerciseScreen}
      key={exercise.exerciseId}
      exercise={exercise}
    />
  );

  const renderItem: ListRenderItem<ExerciseDTO> = ({
    item
  }: ListRenderItemInfo<ExerciseDTO>) => <Item {...item} />;

  return (
    <FlatList
      style={{ flex: 1 }}
      data={exercises}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <ListEmptyMolecules
          $mensagem='Não há exercício registrado.'
          $color={{ $color: 'gray_100' }}
          $text={{ $align: 'center' }}
        />
      )}
      contentContainerStyle={
        exercises.length === 0 && {
          flex: 1,
          justifyContent: 'center'
        }
      }
    />
  );
}
