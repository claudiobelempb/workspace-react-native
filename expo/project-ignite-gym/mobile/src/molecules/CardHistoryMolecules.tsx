import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { HistoryDTO } from 'src/dtos/HistoryDTO';

type Props = {
  exercise: HistoryDTO;
};

export function CardHistoryMolecules({ exercise }: Props) {
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
          {exercise.group}
        </TextAtoms>
        <TextAtoms $color={{ $color: 'gray_100' }} numberOfLines={1}>
          {exercise.name}
        </TextAtoms>
      </BoxAtoms>
      <BoxAtoms>
        <TextAtoms $color={{ $color: 'gray_300' }}>{exercise.hour}</TextAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}
