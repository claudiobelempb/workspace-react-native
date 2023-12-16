import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { useNavigation } from '@react-navigation/native';
import { MealCreate } from '@storage/meals/MealCreate';
import { MealDTO } from '@storage/meals/MealDTO';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { AppError } from '@utils/AppError';
import { AppUUIDV4 } from '@utils/AppUUID';
import { useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';

export function MealFormCreateMolecules() {
  const [status, setStatus] = useState(true);
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescption] = useState('');
  const [inputDate, setInputData] = useState('');
  const [inputHora, setInputHora] = useState('');

  const nameInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  function handleButtonStatus(status: boolean) {
    setStatus(!status);
  }

  const alertError = (message: string) => Alert.alert('Nova refeição', message);

  async function handleCreateMeal() {
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

      const mealId = AppUUIDV4();

      const meal: MealDTO = {
        mealId,
        name: inputName,
        description: inputDescription,
        date: inputDate,
        hora: inputHora,
        status
      };

      await MealCreate(meal);
      navigation.navigate('feedback', { status });
    } catch (error) {
      if (error instanceof AppError) {
        alertError('Não foi possível cadastrar nova refeição');
      } else {
        alertError('Não foi possível cadastrar nova refeição');
        console.log(error);
      }
    }
  }

  return (
    <ContentTemplate
      space={{ paddingY: 'm24px' }}
      position={{ position: 'absolute', bottom: -15 }}
      radius={{ top: { left: 20, right: 20 } }}
      rowGap={10}
      flex={1}
      variantBackgroud='gray_100'
    >
      <BoxTemplate space={{ marginTop: 'l32px' }} rowGap={5}>
        <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
          Nome
        </TextAtom>
        <TextInputAtom
          placeholder='Nome da refeição'
          value={inputName}
          onChangeText={setInputName}
        />
      </BoxTemplate>
      <BoxTemplate rowGap={5}>
        <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
          Descrição
        </TextAtom>
        <TextInputAtom
          placeholder='Descrição da refeição'
          typeInput='tex-area'
          value={inputDescription}
          onChangeText={setInputDescption}
        />
      </BoxTemplate>
      <BoxTemplate direction='row' columnGap={16}>
        <BoxTemplate flex={1} rowGap={5}>
          <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
            Data
          </TextAtom>
          <TextInputAtom
            placeholder='dd/mm/aaaa'
            keyboardType='numeric'
            value={inputDate}
            onChangeText={setInputData}
          />
        </BoxTemplate>
        <BoxTemplate flex={1} rowGap={5}>
          <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
            Hora
          </TextAtom>
          <TextInputAtom
            placeholder='HH:mm'
            keyboardType='numeric'
            value={inputHora}
            onChangeText={setInputHora}
          />
        </BoxTemplate>
      </BoxTemplate>
      <BoxTemplate rowGap={5}>
        <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
          Está dentro da dieta?
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
            <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
              Sim
            </TextAtom>
          </ButtonTouchableOpacityAton>
          <ButtonTouchableOpacityAton
            flex={1}
            minHeight={50}
            variantBackgroud='gray_200'
            isSelectedRed={!status}
            onPress={() => handleButtonStatus(status)}
          >
            <StatusAtoms variantBackgroud='red_700' />
            <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
              Não
            </TextAtom>
          </ButtonTouchableOpacityAton>
        </BoxTemplate>
      </BoxTemplate>
      <BoxTemplate justifyContent='flex-end' flex={1} isHeight>
        <ButtonTouchableOpacityAton
          variantBackgroud='gray_700'
          onPress={handleCreateMeal}
        >
          <TextAtom>Cadastrar refeição</TextAtom>
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </ContentTemplate>
  );
}
