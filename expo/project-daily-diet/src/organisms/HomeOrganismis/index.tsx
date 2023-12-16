import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { IconAtom } from '@atoms/IconAtom';
import { LoadingAtom } from '@atoms/LoadingAtom';
import { TextAtom } from '@atoms/TextAtom';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { SectionListSnackMolecules } from '@molecules/SectionListSnackMolecules';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SectionMealDTO } from '@storage/meals/MealDTO';
import { MealFindAll } from '@storage/meals/MealFindAll';
import { mealsList } from '@storage/meals/utils/MealFunction';

import { BoxTemplate } from '@templates/BoxTemplate';
import { ContainerTemplate } from '@templates/ContainerTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useCallback, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

export function HomeOrganismis() {
  const [meals, setMeals] = useState<SectionMealDTO[]>([]);
  const [status, setStatus] = useState(true);
  const [isLoading, setIsloading] = useState(true);

  console.log(meals);

  const { variant } = useTheme();
  const navigation = useNavigation();

  function handleGoMealStatistic() {
    navigation.navigate('statistics', { status });
  }

  function handleGoMealCreate() {
    navigation.navigate('create');
  }

  const alertError = (message: string) => Alert.alert('Nova refeição', message);

  async function fetchMealFindAll() {
    try {
      setIsloading(true);
      const data = await MealFindAll();
      const meals = mealsList(data);

      const filterStatus = data.find(meal => meal.status === status);
      console.log('Filter: ', filterStatus?.status);
      setStatus(prevState => prevState === filterStatus?.status);

      setMeals(meals);
    } catch (error) {
      console.log(error);
      return alertError('Não foi possível carregar as refeições');
    } finally {
      setIsloading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealFindAll();
    }, [])
  );

  return (
    <ContainerTemplate
      flex={1}
      variantBackgroud='gray_100'
      space={{ paddingY: 'm24px' }}
    >
      <StatusBar
        backgroundColor={variant.gray_100}
        barStyle={'dark-content'}
        translucent
      />
      <ContentTemplate flex={1}>
        <HeaderMolecules />
        <BoxTemplate
          variantBackgroud={status ? 'green_100' : 'red_100'}
          isBorderRadius
          space={{ paddingX: 'm16px' }}
        >
          <BoxTemplate
            justifyContent='flex-end'
            direction='row'
            alingItems='flex-end'
          >
            <ButtonTouchableOpacityAton onPress={handleGoMealStatistic}>
              <IconAtom
                typeIcon='arrow-up-right'
                size={24}
                color={status ? variant.green_700 : variant.red_700}
              />
            </ButtonTouchableOpacityAton>
          </BoxTemplate>
          <HeadingAton
            variantColor='gray_700'
            fontSize='l32px'
            textAlign='center'
          >
            90,86%
          </HeadingAton>
          <TextAtom variantColor='gray_600' textAlign='center' fontSize='m16px'>
            das refeições dentro da dieta
          </TextAtom>
        </BoxTemplate>
        <TextAtom
          variantColor='gray_600'
          space={{ marginTop: 'l32px', marginBottom: 's8px' }}
        >
          Refeições
        </TextAtom>
        <ButtonTouchableOpacityAton
          variantBackgroud='gray_600'
          onPress={handleGoMealCreate}
        >
          <IconAtom typeIcon='plus' color={variant.gray_100} />
          <TextAtom>Nova refeição</TextAtom>
        </ButtonTouchableOpacityAton>
        {isLoading ? (
          <LoadingAtom />
        ) : (
          <SectionListSnackMolecules sections={meals} />
        )}
      </ContentTemplate>
    </ContainerTemplate>
  );
}
