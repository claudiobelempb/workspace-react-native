import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtoms } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';

import ExercicioImg from '@assets/adaptive-icon.png';

export function CardHomeMolecules() {
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
            source={ExercicioImg}
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
              Puxada frontal
            </TextAtoms>
            <TextAtoms
              numberOfLines={2}
              $font={{ $size: 's14' }}
              $color={{ $color: 'gray_300' }}
            >
              3 séries x 12 repetições
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
