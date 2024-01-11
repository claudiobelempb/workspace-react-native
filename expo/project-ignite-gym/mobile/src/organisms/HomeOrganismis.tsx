import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { DefaultTemplates } from '@templates/DefaultTemplates';

import { ContentAtoms } from '@atoms/ContentAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { useExercisesByGroup } from '@hooks/exercises/useExercisesByGroup';
import { CategoryFlatListMolecules } from '@molecules/CategoryFlatListMolecules';
import { HomeFlatListMolecules } from '@molecules/HomeFlatListMolecules';
import { useFocusEffect } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { useCallback, useState } from 'react';
import Toast from 'react-native-toast-message';
import { ExerciseDTO } from 'src/dtos/ExerciseDTO';

export function HomeOrganismis() {
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
  const [categorySelected, setCategorySelected] = useState('antebraço');
  const [isLoading, setIsloading] = useState(true);

  function handleButtomSelected(category: string) {
    setCategorySelected(category);
  }

  async function fetchExercisesByGroup() {
    try {
      setIsloading(true);
      const response = await useExercisesByGroup(categorySelected);
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const msg = isAppError
        ? error.message
        : 'Não foi possível carregar os exercícios.';
      Toast.show({
        text1: msg,
        type: 'error',
        position: 'top'
      });
    } finally {
      setIsloading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [categorySelected])
  );

  return (
    <DefaultTemplates>
      <ContentAtoms $bg={{ $background: 'gray_700' }}>
        <BoxAtoms $height={{ $height: 50 }} $space={{ $mx: 'l32', $mt: 's5' }}>
          {isLoading ? (
            <LoadingAtoms $bg={{ $background: 'transparent' }} size={'small'} />
          ) : (
            <CategoryFlatListMolecules
              category={categorySelected}
              onButtomSelected={handleButtomSelected}
            />
          )}
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
        <BoxAtoms
          $flex={{ $justifyContent: 'center', $alingItems: 'center', $flex: 1 }}
        >
          {isLoading ? (
            <LoadingAtoms $bg={{ $background: 'transparent' }} size={'large'} />
          ) : (
            <HomeFlatListMolecules exercises={exercises} />
          )}
        </BoxAtoms>
      </ContentAtoms>
    </DefaultTemplates>
  );
}
