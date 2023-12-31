import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { DefaultTemplates } from '@templates/DefaultTemplates';

import { ContentAtoms } from '@atoms/ContentAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { CategoryFlatListMolecules } from '@molecules/CategoryFlatListMolecules';
import { HomeFlatListMolecules } from '@molecules/HomeFlatListMolecules';
import { useState } from 'react';
import { CategoryDTO } from 'src/dtos/CategoryDTO';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

export function HomeOrganismis() {
  const [categories, setCategories] = useState<CategoryDTO[]>([
    { categoryId: '1', name: 'Costas', active: true },
    { categoryId: '2', name: 'Bíceps', active: false },
    { categoryId: '3', name: 'Tríceps', active: true },
    { categoryId: '4', name: 'Ombro', active: false },
    { categoryId: '5', name: 'Quadric', active: true }
  ]);

  const [exercises, setExercises] = useState<ExerciseDTO[]>([
    {
      exerciseId: '1',
      name: 'Puxada frontal',
      series: 4,
      repetitions: 10,
      active: true,
      created: '26.08.23',
      time: '09:24',
      category: {
        categoryId: '3',
        name: 'costa',
        active: true
      }
    },
    {
      exerciseId: '2',
      name: 'Remada curvada',
      series: 3,
      repetitions: 12,
      active: true,
      created: '26.08.23',
      time: '09:24',
      category: {
        categoryId: '3',
        name: 'costa',
        active: true
      }
    },
    {
      exerciseId: '',
      name: 'Remada unilateral',
      series: 2,
      repetitions: 20,
      active: true,
      created: '26.08.23',
      time: '09:24',
      category: {
        categoryId: '3',
        name: 'costa',
        active: true
      }
    }
  ]);

  const [isLoading, setIsloading] = useState(true);

  return (
    <DefaultTemplates>
      <ContentAtoms $bg={{ $background: 'gray_700' }}>
        <BoxAtoms $height={{ $height: 50 }} $space={{ $mx: 'l32' }}>
          <CategoryFlatListMolecules categories={categories} />
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
          <HomeFlatListMolecules exercises={exercises} />
        )}
      </ContentAtoms>
    </DefaultTemplates>
  );
}
