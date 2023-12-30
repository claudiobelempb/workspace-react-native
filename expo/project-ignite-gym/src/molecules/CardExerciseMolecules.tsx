import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

type Props = {
  exercise: ExerciseDTO;
};

export function CardExerciseMolecules({ exercise }: Props) {
  return (
    <BoxAtoms
      $bg={{ $background: 'gray_500' }}
      $space={{ $p: 'm16', $mb: 's12' }}
      $border={{ $r: { width: 8 } }}
      $flex={{
        $flexDirection: 'row',
        $alingItems: 'center',
        $justifyContent: 'space-between'
      }}
    >
      <BoxAtoms $flex={{ $rowGap: 8 }}>
        <TextAtoms
          $color={{ $color: 'gray_100' }}
          $text={{ $transform: 'capitalize' }}
        >
          {exercise.category.name}
        </TextAtoms>
        <TextAtoms $color={{ $color: 'gray_100' }}>{exercise.name}</TextAtoms>
      </BoxAtoms>
      <BoxAtoms>
        <TextAtoms $color={{ $color: 'gray_300' }}>08:56</TextAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}
