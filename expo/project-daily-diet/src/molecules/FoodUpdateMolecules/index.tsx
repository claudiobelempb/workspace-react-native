import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { HeaderFormMolecules } from '@molecules/HeaderFormMolecules';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

type StatusType = 'inside' | 'outside';

type SnackProps = {
  name: string;
  description: string;
  data: string;
  hora: string;
  status: StatusType;
};
export function FoodUpdateMolecules() {
  const [status, setStatus] = useState<StatusType>('inside');
  const [inputName, setInputName] = useState('Sanduíche');
  const [inputDescription, setInputDescption] = useState(
    'Sanduíche de pão integral com atum e salada de alface e tomate'
  );
  const [inputData, setInputData] = useState('12/08/2022');
  const [inputHora, setInputHora] = useState('16:00');
  const { variant } = useTheme();

  function handleButtonStatus(type: StatusType) {
    if (status === type) {
      setStatus(type);
    } else {
      setStatus(type);
    }
    console.log('Status: ' + status);
    console.log('Selectd: ' + type);
  }

  function handleNewRegisterSnack() {
    const newSnack: SnackProps = {
      name: inputName,
      description: inputDescription,
      data: inputData,
      hora: inputHora,
      status
    };

    console.log(newSnack);
  }

  return (
    <>
      <StatusBar
        backgroundColor={
          status === 'inside' ? variant.green_100 : variant.red_100
        }
        barStyle={'dark-content'}
        translucent
      />
      <HeaderFormMolecules
        title='Editar refeição'
        onPress={() => console.log('HeaderFormMolecules')}
        variantBackgroud={status === 'inside' ? 'green_100' : 'red_100'}
      />
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
            value={inputName}
            onChangeText={setInputName}
            variantBackgroud='gray_100'
          />
        </BoxTemplate>
        <BoxTemplate rowGap={5}>
          <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
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
            <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
              Data
            </TextAtom>
            <TextInputAtom
              value={inputData}
              onChangeText={setInputData}
              variantBackgroud='gray_100'
            />
          </BoxTemplate>
          <BoxTemplate flex={1} rowGap={5}>
            <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
              Hora
            </TextAtom>
            <TextInputAtom
              value={inputHora}
              onChangeText={setInputHora}
              variantBackgroud='gray_100'
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
              onPress={() => handleButtonStatus('inside')}
              isSelectedGreen={status === 'inside'}
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
              isSelectedRed={status === 'outside'}
              onPress={() => handleButtonStatus('outside')}
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
            onPress={handleNewRegisterSnack}
          >
            <TextAtom>Salvar alterações</TextAtom>
          </ButtonTouchableOpacityAton>
        </BoxTemplate>
      </ContentTemplate>
    </>
  );
}
