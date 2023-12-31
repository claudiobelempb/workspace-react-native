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
      <BoxAtoms $flex={{ $rowGap: 8, $flex: 1 }}>
        <TextAtoms
          $color={{ $color: 'gray_100' }}
          $text={{ $transform: 'capitalize' }}
          numberOfLines={1}
        >
          {exercise.category.name}
        </TextAtoms>
        <TextAtoms $color={{ $color: 'gray_100' }} numberOfLines={1}>
          {exercise.name}
        </TextAtoms>
      </BoxAtoms>
      <BoxAtoms>
        <TextAtoms $color={{ $color: 'gray_300' }}>{exercise.time}</TextAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}
