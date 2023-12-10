import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { useTheme } from 'styled-components/native';

export function DescriptionDietMolecules() {
  const { variant } = useTheme();

  return (
    <ContentTemplate
      variantBackgroud='green_100'
      isBorderRadius
      maxHeight={130}
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
            color={variant.green_700}
          />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>

      <HeadingAton variantColor='gray_700' fontSize='l32px' textAlign='center'>
        90,86%
      </HeadingAton>
      <TextAtom variantColor='gray_600' textAlign='center' fontSize='m16px'>
        das refeições dentro da dieta
      </TextAtom>
    </ContentTemplate>
  );
}
