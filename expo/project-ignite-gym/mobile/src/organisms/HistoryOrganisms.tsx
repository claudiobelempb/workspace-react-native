import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { SectionListHistoryMolecules } from '@molecules/SectionListHistoryMolecules';
import { useState } from 'react';
import { SectionExerciselDTO } from 'src/dtos/ExerciseDTO';

export function HistoryOrganisms() {
  const [exercises, setExercises] = useState<SectionExerciselDTO[]>([]);

  return (
    <ContainerAtoms $bg={{ $background: 'gray_500' }} $flex={{ $flex: 1 }}>
      <HeaderMolecules title='Histórico de Exercícios' />
      <ContentAtoms
        $space={{ $p: 'm24' }}
        $bg={{ $background: 'gray_700' }}
        $flex={{ $flex: 1 }}
      >
        <SectionListHistoryMolecules sections={exercises} />
      </ContentAtoms>
    </ContainerAtoms>
  );
}
