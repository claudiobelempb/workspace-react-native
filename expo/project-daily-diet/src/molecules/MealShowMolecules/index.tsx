import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { IconAtom } from '@atoms/IconAtom';
import { ModalAtoms } from '@atoms/ModalAtoms';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
import { HeaderFormMolecules } from '@molecules/HeaderFormMolecules';
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import { MealDTO, MealIdParams } from '@storage/meals/MealDTO';
import { MealDelete } from '@storage/meals/MealDelete';
import { MealFindById } from '@storage/meals/MealFindById';

import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useCallback, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

export function MealShowMolecules() {
  const [meal, setMeal] = useState<MealDTO | undefined>({} as MealDTO);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  const navigation = useNavigation();
  const router = useRoute();
  const { mealId } = router.params as MealIdParams;

  const { variant } = useTheme();

  const alertError = (message: string) => Alert.alert('Nova refeição', message);

  function handleGoMealUpdate(mealId: string) {
    navigation.navigate('update', { mealId });
  }

  function handleMealBackToHomeScreen() {
    navigation.navigate('home');
  }

  async function handleMealDelete(mealId: string) {
    try {
      await MealDelete(mealId);
      handleMealBackToHomeScreen();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMealFindById() {
    try {
      setIsloading(true);
      const data = await MealFindById(mealId);
      setMeal(data);
    } catch (error) {
      console.log(error);
      return alertError('Não foi possível carregar a refeição.');
    } finally {
      setIsloading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealFindById();
    }, [])
  );

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        translucent={true}
        backgroundColor={meal?.status ? variant.green_100 : variant.red_100}
      />
      <HeaderFormMolecules
        title='Refeição'
        onPress={() => console.log('HeaderFormMolecules')}
        variantBackgroud={meal?.status ? 'green_100' : 'red_100'}
      />
      <ContentTemplate
        space={{ paddingY: 'm24px' }}
        position={{ position: 'absolute', bottom: -15 }}
        radius={{ top: { left: 20, right: 20 } }}
        rowGap={10}
        flex={1}
        variantBackgroud='gray_100'
      >
        <HeadingAton
          variantColor='gray_700'
          fontSize='m20px'
          space={{ marginTop: 'l32px' }}
        >
          {meal?.name}
        </HeadingAton>
        <TextAtom variantColor='gray_700'>{meal?.description}</TextAtom>
        <TextAtom variantColor='gray_700' fontWeigh='700' fontSize='s14px'>
          Data e hora
        </TextAtom>
        <TextAtom variantColor='gray_700' space={{ marginBottom: 'l32px' }}>
          {meal?.date} às {meal?.hora}
        </TextAtom>
        <BoxTemplate
          direction='row'
          alingItems='center'
          columnGap={10}
          minHeight={50}
          variantBackgroud='gray_200'
          isBorderRadius
          space={{ paddingY: 's12px' }}
        >
          <StatusAtoms
            variantBackgroud={meal?.status ? 'green_700' : 'red_700'}
          />
          <TextAtom variantColor='gray_700' fontSize='s14px'>
            {meal?.status ? 'dentro da dieta' : 'fora da dieta'}
          </TextAtom>
        </BoxTemplate>

        {meal && modalVisible && (
          <ModalAtoms
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            onAction={() => handleMealDelete(meal.mealId)}
          />
        )}

        <BoxTemplate flex={1} justifyContent='flex-end' rowGap={10}>
          <ButtonTouchableOpacityAton
            variantBackgroud='gray_600'
            onPress={() => handleGoMealUpdate(`${meal?.mealId}`)}
          >
            <IconAtom typeIcon='edit' color={variant.gray_100} />
            <TextAtom>Editar refeição</TextAtom>
          </ButtonTouchableOpacityAton>
          <ButtonTouchableOpacityAton
            variantBackgroud='gray_100'
            isBorder
            variantBorderColor='gray_700'
            onPress={() => setModalVisible(true)}
          >
            <IconAtom typeIcon='trash-2' color={variant.gray_700} />
            <TextAtom variantColor='gray_700'>Excluir refeição</TextAtom>
          </ButtonTouchableOpacityAton>
        </BoxTemplate>
      </ContentTemplate>
    </>
  );
}
