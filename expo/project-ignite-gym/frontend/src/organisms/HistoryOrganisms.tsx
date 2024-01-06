import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { SectionListExerciseMolecules } from '@molecules/SectionListExerciseMolecules';
import { useState } from 'react';
import { SectionExerciselDTO } from 'src/dtos/ExerciseDTO';

export function HistoryOrganisms() {
  const [exercises, setExercises] = useState<SectionExerciselDTO[]>([
    {
      date: '26.08.23',
      data: [
        {
          exerciseId: '1',
          name: 'Puxada frontal',
          series: 3,
          repetitions: 12,
          active: true,
          created: '26.08.23',
          time: '08:32',
          category: {
            categoryId: '1',
            name: 'costa',
            active: true
          }
        },
        {
          exerciseId: '2',
          name: 'Remada curvada',
          series: 3,
          repetitions: 12,
          active: false,
          created: '26.08.23',
          time: '08:32',
          category: {
            categoryId: '1',
            name: 'costa',
            active: true
          }
        },
        {
          exerciseId: '3',
          name: 'Remada unilateral',
          series: 3,
          repetitions: 12,
          active: false,
          created: '27.08.23',
          time: '08:32',
          category: {
            categoryId: '1',
            name: 'costa',
            active: true
          }
        },
        {
          exerciseId: '4',
          name: 'Levantamento terra',
          series: 3,
          repetitions: 12,
          active: false,
          created: '28.08.23',
          time: '08:32',
          category: {
            categoryId: '1',
            name: 'costa',
            active: true
          }
        }
      ]
    },
    {
      date: '27.08.23',
      data: [
        {
          exerciseId: '1',
          name: 'Puxada frontal',
          series: 3,
          repetitions: 12,
          active: true,
          created: '26.08.23',
          time: '11:24',
          category: {
            categoryId: '2',
            name: 'biceps',
            active: true
          }
        }
      ]
    },
    {
      date: '28.08.23',
      data: [
        {
          exerciseId: '1',
          name: 'Puxada frontal',
          series: 3,
          repetitions: 12,
          active: true,
          created: '26.08.23',
          time: '09:24',
          category: {
            categoryId: '3',
            name: 'triceps',
            active: true
          }
        },
        {
          exerciseId: '2',
          name: 'Remada curvada',
          series: 3,
          repetitions: 12,
          active: false,
          created: '26.08.23',
          time: '09:24',
          category: {
            categoryId: '3',
            name: 'triceps',
            active: true
          }
        }
      ]
    }
  ]);

  return (
    <ContainerAtoms $bg={{ $background: 'gray_500' }} $flex={{ $flex: 1 }}>
      <HeaderMolecules title='Histórico de Exercícios' />
      <ContentAtoms
        $space={{ $p: 'm24' }}
        $bg={{ $background: 'gray_700' }}
        $flex={{ $flex: 1 }}
      >
        <SectionListExerciseMolecules sections={exercises} />
      </ContentAtoms>
    </ContainerAtoms>
  );
}
