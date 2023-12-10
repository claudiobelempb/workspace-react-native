import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { IconAtom } from '@atoms/IconAtom';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
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
export function FoodDetailMolecules() {
  const [status, setStatus] = useState<StatusType>('inside');
  const { variant } = useTheme();
  return (
    <>
      <StatusBar
        barStyle='dark-content'
        translucent={true}
        backgroundColor={
          status === 'inside' ? variant.green_100 : variant.red_100
        }
      />
      <HeaderFormMolecules
        title='Refeição'
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
        <HeadingAton
          variantColor='gray_700'
          fontSize='m20px'
          space={{ marginTop: 'l32px' }}
        >
          Sanduíche
        </HeadingAton>
        <TextAtom variantColor='gray_700'>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </TextAtom>
        <TextAtom variantColor='gray_700' fontWeigh='700' fontSize='s14px'>
          Data e hora
        </TextAtom>
        <TextAtom variantColor='gray_700' space={{ marginBottom: 'l32px' }}>
          12/08/2022 às 16:00
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
            variantBackgroud={status === 'inside' ? 'green_700' : 'red_700'}
          />
          <TextAtom variantColor='gray_700' fontSize='s14px'>
            dentro da dieta
          </TextAtom>
        </BoxTemplate>
        <BoxTemplate flex={1} justifyContent='flex-end' rowGap={10}>
          <ButtonTouchableOpacityAton variantBackgroud='gray_600'>
            <IconAtom typeIcon='edit' color={variant.gray_100} />
            <TextAtom>Editar refeição</TextAtom>
          </ButtonTouchableOpacityAton>
          <ButtonTouchableOpacityAton
            variantBackgroud='gray_100'
            isBorder
            variantBorderColor='gray_700'
          >
            <IconAtom typeIcon='trash-2' color={variant.gray_700} />
            <TextAtom variantColor='gray_700'>Excluir refeição</TextAtom>
          </ButtonTouchableOpacityAton>
        </BoxTemplate>
      </ContentTemplate>
    </>
  );
}
