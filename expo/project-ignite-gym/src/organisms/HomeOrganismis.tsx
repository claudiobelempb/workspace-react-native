import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAtoms } from '@atoms/TextAtoms';
import { DefaultTemplates } from '@templates/DefaultTemplates';
import { FlatList } from 'react-native';

import ExercicioImg from '@assets/adaptive-icon.png';
import { IconAtoms } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { useState } from 'react';

type ExerciseType = {
  categoryId: string;
  name: string;
};
export function HomeOrganismis() {
  const [categories, setCategories] = useState<ExerciseType[]>([
    { categoryId: '1', name: 'Costas' },
    { categoryId: '2', name: 'Bíceps' },
    { categoryId: '3', name: 'Tríceps' },
    { categoryId: '4', name: 'Ombro' },
    { categoryId: '5', name: 'Quadric' }
  ]);
  return (
    <DefaultTemplates>
      <BoxAtoms $height={{ $height: 60 }} $space={{ $mx: 'l32' }}>
        <FlatList
          data={categories}
          keyExtractor={item => item.categoryId}
          renderItem={({ item }) => (
            <BoxAtoms
              $flex={{ $columnGap: 10 }}
              $space={{ $py: 's8' }}
              $height={{ $height: 455 }}
              $width={{ $minWidth: 100 }}
            >
              <ButtonTouchableOpacityAton
                $height={{ $height: 53 }}
                $bg={{ $background: 'gray_600' }}
                $border={{ $r: { width: 5 } }}
                $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
                $isActive={!!item}
              >
                <TextAtoms
                  $text={{ $align: 'center' }}
                  $color={{ $color: 'gray_100' }}
                  $isActive={!!item}
                >
                  {item.name}
                </TextAtoms>
              </ButtonTouchableOpacityAton>
            </BoxAtoms>
          )}
          horizontal={true}
        />
      </BoxAtoms>

      <BoxAtoms
        $height={{ $height: 30 }}
        $flex={{ $flexDirection: 'row' }}
        $space={{ $py: 's8' }}
      >
        <TextAtoms
          $color={{ $color: 'gray_100' }}
          $font={{ $weigh: '700', $size: 'm16' }}
        >
          Exercícios
        </TextAtoms>
        <TextAtoms $color={{ $color: 'gray_100' }} $font={{ $size: 's14' }}>
          4
        </TextAtoms>
      </BoxAtoms>

      <BoxAtoms $flex={{ $flex: 1 }}>
        <FlatList
          data={['consta', 'bíceps']}
          renderItem={({ item }) => (
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
                  />
                  <BoxAtoms>
                    <TextAtoms
                      $font={{ $weigh: '700', $size: 'm18' }}
                      $color={{ $color: 'gray_100' }}
                    >
                      Puxada frontal
                    </TextAtoms>
                    <TextAtoms
                      $font={{ $size: 's14' }}
                      $color={{ $color: 'gray_100' }}
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
                    $color={{ $color: 'gray_100' }}
                    $font={{ $size: 'l30' }}
                  />
                </BoxAtoms>
              </ButtonTouchableOpacityAton>
            </BoxAtoms>
          )}
          showsVerticalScrollIndicator={false}
        />
      </BoxAtoms>
    </DefaultTemplates>
  );
}
