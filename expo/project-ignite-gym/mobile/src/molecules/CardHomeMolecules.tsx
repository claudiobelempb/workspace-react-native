import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtoms } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';

import { api } from '@services/api';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

type Props = {
  exercise: ExerciseDTO;
  onPress?: () => void;
};
export function CardHomeMolecules({ exercise, onPress }: Props) {
  return (
    <BoxAtoms $space={{ $mx: 's8' }}>
      <ButtonTouchableOpacityAton
        $height={{ $height: 83 }}
        $bg={{ $background: 'gray_500' }}
        $border={{ $r: { width: 5 } }}
        $flex={{
          $alingItems: 'center',
          $justifyContent: 'center',
          $flexDirection: 'row'
        }}
        onPress={onPress}
      >
        <BoxAtoms
          $space={{ $p: 's8' }}
          $width={{ $width: 50 }}
          $flex={{
            $alingItems: 'center',
            $columnGap: 10,
            $flexDirection: 'row'
          }}
        >
          <ImageAtoms
            source={{
              uri: `${api.defaults.baseURL}/exercise/thumb/${exercise.thumb}`
            }}
            $width={{ $width: 64 }}
            $height={{ $height: 64 }}
            $border={{
              $b: { width: 2, color: 'gray_100', style: 'solid ' },
              $r: { width: 5 }
            }}
            resizeMode='center'
          />
          <BoxAtoms>
            <TextAtoms
              $font={{ $weigh: '700', $size: 'm18' }}
              $color={{ $color: 'white' }}
            >
              {exercise.name}
            </TextAtoms>
            <TextAtoms
              numberOfLines={2}
              $font={{ $size: 's14' }}
              $color={{ $color: 'gray_300' }}
            >
              {exercise.series} séries x {exercise.repetitions} repetições
            </TextAtoms>
          </BoxAtoms>
        </BoxAtoms>
        <BoxAtoms
          $space={{ $p: 's10' }}
          $width={{ $width: 50 }}
          $flex={{
            $alingItems: 'flex-end'
          }}
        >
          <IconAtoms
            name='chevron-right'
            $color={{ $color: 'gray_300' }}
            $font={{ $size: 'l30' }}
          />
        </BoxAtoms>
      </ButtonTouchableOpacityAton>
    </BoxAtoms>
  );
}
