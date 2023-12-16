import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { LoadingAtom } from '@atoms/LoadingAtom';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { HeaderFormMolecules } from '@molecules/HeaderFormMolecules';
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import { MealDTO, MealIdParams } from '@storage/meals/MealDTO';
import { MealFindById } from '@storage/meals/MealFindById';
import { MealUpdate } from '@storage/meals/MealUpdate';

import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useCallback, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

export function MealFormUpdateMolecules() {
  const [status, setStatus] = useState(true);
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescption] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputHora, setInputHora] = useState('');
  const [meal, setMeal] = useState<MealDTO | undefined>({} as MealDTO);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const router = useRoute();
  const { mealId } = router.params as MealIdParams;

  const { variant } = useTheme();

  function handleButtonStatus(status: boolean) {
    setStatus(!status);
  }

  const alertError = (message: string) =>
    Alert.alert('Editar refeição', message);

  function handleBackToShow() {
    navigation.goBack();
  }

  async function handleUpdateMeal() {
    try {
      if (inputName.trim().length === 0) {
        return alertError('Informe o nome da refeição.');
      }

      if (inputDescription.trim().length === 0) {
        return alertError('Informe a descrição da refeição.');
      }

      if (inputDate.trim().length === 0) {
        return alertError('Informe a data da refeição.');
      }

      if (inputDate.length < 10) {
        return alertError('O formato da data não é válida.');
      }

      if (inputHora.trim().length === 0) {
        return alertError('Informe a hora da refeição.');
      }

      if (inputHora.length < 5) {
        return alertError('O formato da hora não é válido.');
      }

      const meal: MealDTO = {
        mealId,
        name: inputName,
        description: inputDescription,
        date: inputDate,
        hora: inputHora,
        status
      };

      await MealUpdate(mealId, meal);
      handleBackToShow();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMealFindById() {
    try {
      setLoading(true);
      const data = await MealFindById(mealId);
      setInputName(`${data?.name}`);
      setInputDescption(`${data?.description}`);
      setInputDate(`${data?.date}`);
      setInputHora(`${data?.hora}`);
      setStatus(prevState => {
        return prevState === data?.status;
      });
      console.log(data);
      setMeal(data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.'
      );
    } finally {
      setLoading(false);
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
        backgroundColor={status ? variant.green_100 : variant.red_100}
        barStyle={'dark-content'}
        translucent
      />
      <HeaderFormMolecules
        title='Editar refeição'
        onPress={() => console.log('HeaderFormMolecules')}
        variantBackgroud={status ? 'green_100' : 'red_100'}
      />
      <ContentTemplate
        space={{ paddingY: 'm24px' }}
        position={{ position: 'absolute', bottom: -15 }}
        radius={{ top: { left: 20, right: 20 } }}
        rowGap={10}
        flex={1}
        variantBackgroud='gray_100'
      >
        {loading ? (
          <LoadingAtom />
        ) : (
          <>
            <BoxTemplate space={{ marginTop: 'l32px' }} rowGap={5}>
              <TextAtom
                fontSize='s14px'
                variantColor='gray_600'
                fontWeigh='700'
              >
                Nome
              </TextAtom>
              <TextInputAtom
                value={inputName}
                onChangeText={setInputName}
                variantBackgroud='gray_100'
              />
            </BoxTemplate>
            <BoxTemplate rowGap={5}>
              <TextAtom
                fontSize='s14px'
                variantColor='gray_600'
                fontWeigh='700'
              >
                Descrição
              </TextAtom>
              <TextInputAtom
                typeInput='tex-area'
                value={inputDescription}
                onChangeText={setInputDescption}
                variantBackgroud='gray_100'
              />
            </BoxTemplate>
            <BoxTemplate direction='row' columnGap={16}>
              <BoxTemplate flex={1} rowGap={5}>
                <TextAtom
                  fontSize='s14px'
                  variantColor='gray_600'
                  fontWeigh='700'
                >
                  Data
                </TextAtom>
                <TextInputAtom
                  value={inputDate}
                  onChangeText={setInputDate}
                  variantBackgroud='gray_100'
                />
              </BoxTemplate>
              <BoxTemplate flex={1} rowGap={5}>
                <TextAtom
                  fontSize='s14px'
                  variantColor='gray_600'
                  fontWeigh='700'
                >
                  Hora
                </TextAtom>
                <TextInputAtom
                  placeholder='HH:mm'
                  keyboardType='numeric'
                  value={inputHora}
                  onChangeText={setInputHora}
                  variantBackgroud='gray_100'
                />
              </BoxTemplate>
            </BoxTemplate>
            <BoxTemplate rowGap={5}>
              <TextAtom
                fontSize='s14px'
                variantColor='gray_600'
                fontWeigh='700'
              >
                {status ? 'Está dentro da dieta?' : 'Está fora da dieta?'}
              </TextAtom>
              <BoxTemplate direction='row' columnGap={10}>
                <ButtonTouchableOpacityAton
                  flex={1}
                  variantBackgroud='gray_200'
                  minHeight={50}
                  onPress={() => handleButtonStatus(status)}
                  isSelectedGreen={status}
                >
                  <StatusAtoms variantBackgroud='green_700' />
                  <TextAtom
                    fontSize='s14px'
                    variantColor='gray_600'
                    fontWeigh='700'
                  >
                    Sim
                  </TextAtom>
                </ButtonTouchableOpacityAton>
                <ButtonTouchableOpacityAton
                  flex={1}
                  minHeight={50}
                  variantBackgroud='gray_200'
                  onPress={() => handleButtonStatus(status)}
                  isSelectedRed={!status}
                >
                  <StatusAtoms variantBackgroud='red_700' />
                  <TextAtom
                    fontSize='s14px'
                    variantColor='gray_600'
                    fontWeigh='700'
                  >
                    Não
                  </TextAtom>
                </ButtonTouchableOpacityAton>
              </BoxTemplate>
            </BoxTemplate>
            <BoxTemplate justifyContent='flex-end' flex={1} isHeight>
              <ButtonTouchableOpacityAton
                variantBackgroud='gray_700'
                onPress={handleUpdateMeal}
              >
                <TextAtom>Salvar alterações</TextAtom>
              </ButtonTouchableOpacityAton>
            </BoxTemplate>
          </>
        )}
      </ContentTemplate>
    </>
  );
}
