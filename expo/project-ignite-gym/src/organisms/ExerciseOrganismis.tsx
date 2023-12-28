import ExerciseImg from '@assets/exe.png';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { IconAtoms } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { HeaderExerciseMolecules } from '@molecules/HeaderExerciseMolecules';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';
export function ExerciseOrganisms() {
  const { color } = useTheme();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.gray_500 }}>
      <ContainerAtoms $bg={{ $background: 'gray_500' }} $flex={{ $flex: 1 }}>
        <HeaderExerciseMolecules />
        <ContentAtoms $flex={{ $flex: 1 }} $bg={{ $background: 'gray_700' }}>
          <BoxAtoms
            $flex={{ $justifyContent: 'center', $alingItems: 'center' }}
            $space={{ $mt: 'm24' }}
          >
            <ImageAtoms
              source={ExerciseImg}
              $border={{ $r: { width: 8 } }}
              $width={{ $width: 360 }}
              $height={{ $height: 360 }}
            />
          </BoxAtoms>
          <BoxAtoms
            $bg={{ $background: 'gray_500' }}
            $space={{ $m: 'm16' }}
            $border={{ $r: { width: 8 } }}
          >
            <BoxAtoms
              $flex={{ $flexDirection: 'row', $justifyContent: 'space-evenly' }}
            >
              <BoxAtoms
                $flex={{ $flexDirection: 'row', $columnGap: 10 }}
                $space={{ $p: 'm16' }}
              >
                <IconAtoms $font={{ $size: 'm24' }} name='droplet' />
                <TextAtoms $color={{ $color: 'gray_100' }}>3 séries</TextAtoms>
              </BoxAtoms>
              <BoxAtoms
                $flex={{ $flexDirection: 'row', $columnGap: 10 }}
                $space={{ $p: 'm16' }}
              >
                <IconAtoms $font={{ $size: 'm24' }} name='repeat' />
                <TextAtoms $color={{ $color: 'gray_100' }}>
                  12 repetições
                </TextAtoms>
              </BoxAtoms>
            </BoxAtoms>
            <BoxAtoms $space={{ $p: 'm16' }}>
              <ButtonTouchableOpacityAton
                $bg={{ $background: 'green_700' }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $height={{ $height: 56 }}
                $border={{ $r: { width: 8 } }}
              >
                <TextAtoms
                  $color={{ $color: 'gray_100' }}
                  $text={{ $align: 'center' }}
                >
                  Marcar como realizado
                </TextAtoms>
              </ButtonTouchableOpacityAton>
            </BoxAtoms>
          </BoxAtoms>
        </ContentAtoms>
      </ContainerAtoms>
    </ScrollView>
  );
}
