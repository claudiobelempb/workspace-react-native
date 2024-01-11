import RepetitionsSvg from '@assets/repetitions.svg';
import SeriesSvg from '@assets/series.svg';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { useExercisesFindById } from '@hooks/exercises/useExercisesFindById';
import { useHistoriCreateService } from '@hooks/history/useHistoryCreate.service';
import { ExerciseHeaderMolecules } from '@molecules/ExerciseHeaderMolecules';
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/private.routes';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { ExerciseDTO, ExerciseIdParamsProps } from 'src/dtos/ExerciseDTO';
import { useTheme } from 'styled-components/native';
export function ExerciseOrganisms() {
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);

  const { color } = useTheme();
  const route = useRoute();
  const { exerciseId } = route.params as ExerciseIdParamsProps;
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleHistoryScreen() {
    navigation.navigate('history');
  }

  async function fechtExerciseFindById() {
    try {
      setIsLoading(true);
      const response = await useExercisesFindById(exerciseId);
      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const msg = isAppError
        ? error.message
        : 'Não foi possível carregar os detalhes do exercícios.';
      Toast.show({
        text1: msg,
        type: 'error',
        position: 'top'
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleHistoryCreateService() {
    try {
      setIsLoadingCreate(true);
      const response = await useHistoriCreateService(exerciseId);
      setExercise(response.data);

      Toast.show({
        text1: 'Parabéns! Exercício registrado no seu histórico.',
        type: 'success',
        position: 'top'
      });

      handleHistoryScreen();
    } catch (error) {
      const isAppError = error instanceof AppError;
      const msg = isAppError
        ? error.message
        : 'Não foi possível registrar o exercícios.';
      Toast.show({
        text1: msg,
        type: 'error',
        position: 'top'
      });
    } finally {
      setIsLoadingCreate(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fechtExerciseFindById();
    }, [exerciseId])
  );

  return (
    <ContainerAtoms
      $bg={{ $background: 'gray_500' }}
      $flex={{ $flex: 1, $alingItems: 'center', $justifyContent: 'center' }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: color.gray_500 }}>
        {isLoading ? (
          <LoadingAtoms $bg={{ $background: 'transparent' }} size={'small'} />
        ) : (
          <>
            <ExerciseHeaderMolecules
              exercise={exercise.name}
              category={exercise.group}
            />

            <ContentAtoms
              $flex={{ $flex: 1 }}
              $bg={{ $background: 'gray_700' }}
            >
              <BoxAtoms
                $flex={{ $justifyContent: 'center', $alingItems: 'center' }}
                $space={{ $mt: 'm24' }}
                $border={{ $r: { width: 8 } }}
                // $bg={{ $background: 'green_100' }}
                $overflow='hidden'
                $width={{ $minWidth: 360 }}
                $height={{ $minHeight: 360 }}
              >
                <ImageAtoms
                  $flex={{ $justifyContent: 'center', $alingItems: 'center' }}
                  source={{
                    uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`
                  }}
                  $width={{ $minWidth: 360 }}
                  $height={{ $minHeight: 360 }}
                  resizeMode='cover'
                  $border={{ $r: { width: 8 } }}
                  // $bg={{ $background: 'green_100' }}
                />
              </BoxAtoms>

              <BoxAtoms
                $bg={{ $background: 'gray_500' }}
                $space={{ $m: 'm16' }}
                $border={{ $r: { width: 8 } }}
              >
                <BoxAtoms
                  $flex={{
                    $flexDirection: 'row',
                    $justifyContent: 'space-evenly'
                  }}
                >
                  <BoxAtoms
                    $flex={{ $flexDirection: 'row', $columnGap: 10 }}
                    $space={{ $p: 'm16' }}
                  >
                    <SeriesSvg />
                    <TextAtoms $color={{ $color: 'gray_100' }}>
                      {exercise.series} séries
                    </TextAtoms>
                  </BoxAtoms>
                  <BoxAtoms
                    $flex={{ $flexDirection: 'row', $columnGap: 10 }}
                    $space={{ $p: 'm16' }}
                  >
                    <RepetitionsSvg />
                    <TextAtoms $color={{ $color: 'gray_100' }}>
                      {exercise.repetitions} repetições
                    </TextAtoms>
                  </BoxAtoms>
                </BoxAtoms>

                <BoxAtoms $space={{ $p: 'm16' }}>
                  {isLoadingCreate ? (
                    <ButtonTouchableOpacityAton
                      $bg={{ $background: 'green_700' }}
                      $flex={{
                        $alingItems: 'center',
                        $justifyContent: 'center'
                      }}
                      $height={{ $height: 56 }}
                      $border={{ $r: { width: 8 } }}
                      disabled={isLoadingCreate}
                    >
                      <TextAtoms
                        $color={{ $color: 'gray_100' }}
                        $text={{ $align: 'center' }}
                      >
                        <LoadingAtoms
                          $bg={{ $background: 'transparent' }}
                          size={'small'}
                          $color={{ $color: 'gray_100' }}
                        />
                      </TextAtoms>
                    </ButtonTouchableOpacityAton>
                  ) : (
                    <ButtonTouchableOpacityAton
                      onPress={handleHistoryCreateService}
                      $bg={{ $background: 'green_700' }}
                      $flex={{
                        $alingItems: 'center',
                        $justifyContent: 'center'
                      }}
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
                  )}
                </BoxAtoms>
              </BoxAtoms>
            </ContentAtoms>
          </>
        )}
      </ScrollView>
    </ContainerAtoms>
  );
}
