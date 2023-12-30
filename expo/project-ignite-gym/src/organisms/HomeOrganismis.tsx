import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { DefaultTemplates } from '@templates/DefaultTemplates';
import { FlatList } from 'react-native';

import { ContentAtoms } from '@atoms/ContentAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { CardCategoryMolecules } from '@molecules/CardCategoryMolecules';
import { CardHomeMolecules } from '@molecules/CardHomeMolecules';
import { ListEmptyMolecules } from '@molecules/ListEmptyMolecules';
import { useState } from 'react';

type CategoryType = {
  categoryId: string;
  name: string;
  active: boolean;
};

type ExerciseType = {
  exerciseId: string;
  name: string;
  series: number;
  repetitions: number;
  active: boolean;
};

export function HomeOrganismis() {
  const [categories, setCategories] = useState<CategoryType[]>([
    { categoryId: '1', name: 'Costas', active: true },
    { categoryId: '2', name: 'Bíceps', active: false },
    { categoryId: '3', name: 'Tríceps', active: true },
    { categoryId: '4', name: 'Ombro', active: false },
    { categoryId: '5', name: 'Quadric', active: true }
  ]);

  const [exercises, setExercises] = useState<ExerciseType[]>([
    {
      exerciseId: '1',
      name: 'Puxada frontal',
      series: 3,
      repetitions: 12,
      active: true
    },
    {
      exerciseId: '2',
      name: 'Remada curvada',
      series: 3,
      repetitions: 12,
      active: false
    },
    {
      exerciseId: '3',
      name: 'Remada unilateral',
      series: 3,
      repetitions: 12,
      active: true
    },
    {
      exerciseId: '4',
      name: 'Levantamento terra',
      series: 3,
      repetitions: 12,
      active: false
    },
    {
      exerciseId: '5',
      name: 'Levantamento terra',
      series: 3,
      repetitions: 12,
      active: false
    }
  ]);

  const [categorySelected, setCategorySelected] = useState('1');
  const [isLoading, setIsloading] = useState(true);

  function handleButtomSelected(selected: string) {
    setCategorySelected(selected);
  }

  return (
    <DefaultTemplates>
      <ContentAtoms $bg={{ $background: 'gray_700' }}>
        <BoxAtoms $height={{ $height: 50 }} $space={{ $mx: 'l32' }}>
          <FlatList
            style={{ marginHorizontal: 24 }}
            data={categories}
            keyExtractor={item => item.categoryId}
            renderItem={({ item }) => (
              <CardCategoryMolecules
                isActive={categorySelected === item.categoryId}
                onPress={() => handleButtomSelected(item.categoryId)}
                name={item.name}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </BoxAtoms>
      </ContentAtoms>
      <ContentAtoms
        $bg={{ $background: 'gray_700' }}
        $space={{ $py: 'm24' }}
        $flex={{ $flex: 1 }}
      >
        <BoxAtoms
          $height={{ $height: 30 }}
          $flex={{ $flexDirection: 'row', $justifyContent: 'space-between' }}
          $space={{ $py: 's8' }}
        >
          <TextAtoms
            $color={{ $color: 'gray_100' }}
            $font={{ $weigh: '700', $size: 'm16' }}
          >
            Exercícios
          </TextAtoms>
          <TextAtoms $color={{ $color: 'gray_100' }} $font={{ $size: 's14' }}>
            {exercises.length}
          </TextAtoms>
        </BoxAtoms>

        {!isLoading ? (
          <LoadingAtoms $bg={{ $background: 'transparent' }} size={'large'} />
        ) : (
          <FlatList
            style={{ flex: 1 }}
            data={exercises}
            keyExtractor={item => item.exerciseId}
            renderItem={({ item }) => <CardHomeMolecules />}
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
        )}
      </ContentAtoms>
    </DefaultTemplates>
  );
}
