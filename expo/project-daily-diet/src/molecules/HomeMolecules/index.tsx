import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { CardContainerSnackMolecules } from '@molecules/CardContainerSnackMolecules';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

type StatusType = 'inside' | 'outside';

export function HomeMolecules() {
  const [status, setStatus] = useState<StatusType>('inside');
  const { variant } = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={variant.gray_100}
        barStyle={'dark-content'}
        translucent
      />
      <ContentTemplate>
        <HeaderMolecules />
        <BoxTemplate
          variantBackgroud={status === 'inside' ? 'green_100' : 'red_100'}
          isBorderRadius
          space={{ paddingX: 'm16px' }}
        >
          <BoxTemplate
            justifyContent='flex-end'
            direction='row'
            alingItems='flex-end'
          >
            <ButtonTouchableOpacityAton
              onPress={() => console.log('DescriptionDietMolecules')}
            >
              <IconAtom
                typeIcon='arrow-up-right'
                size={24}
                color={
                  status === 'inside' ? variant.green_700 : variant.red_700
                }
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
          onPress={() => console.log('HomeOrganismis')}
        >
          <IconAtom typeIcon='plus' color={variant.gray_100} />
          <TextAtom>Nova refeição</TextAtom>
        </ButtonTouchableOpacityAton>

        <CardContainerSnackMolecules />
      </ContentTemplate>
    </>
  );
}
