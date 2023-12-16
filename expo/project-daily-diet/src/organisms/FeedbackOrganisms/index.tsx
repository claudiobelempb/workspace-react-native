import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAtom } from '@atoms/TextAtom';
import { ContentTemplate } from '@templates/ContentTemplate';

import {
  default as ImageDander,
  default as ImageSuccess
} from '@assets/feedback-success.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FoodParamsType } from '@storage/meals/FoodDTO';
export function FeedbackOrganisms() {
  const navigation = useNavigation();
  const router = useRoute();
  const { status } = router.params as FoodParamsType;

  return (
    <ContentTemplate
      columnGap={30}
      space={{ paddingY: 'l32px' }}
      justifyContent='center'
      alingItems='center'
    >
      {status ? (
        <>
          <HeadingAton
            variantColor='green_700'
            fontSize='m24px'
            textAlign='center'
          >
            Continue assim!
          </HeadingAton>
          <ImageAtom width={224} source={ImageSuccess} />
          <TextAtom variantColor='gray_600' fontSize='m16px' textAlign='center'>
            Você continua{' '}
            <TextAtom variantColor='gray_700' fontWeigh='700'>
              dentro da dieta.
            </TextAtom>{' '}
            Muito bem!
          </TextAtom>
        </>
      ) : (
        <>
          <HeadingAton
            variantColor='red_700'
            fontSize='m24px'
            textAlign='center'
          >
            Que pena!
          </HeadingAton>
          <ImageAtom source={ImageDander} />
          <TextAtom variantColor='gray_600' fontSize='m16px' textAlign='center'>
            Você{' '}
            <TextAtom variantColor='gray_700' fontWeigh='700'>
              saiu da dieta
            </TextAtom>{' '}
            dessa vez, mas continue se esforçando e não desista!
          </TextAtom>
        </>
      )}

      <ButtonTouchableOpacityAton
        variantBackgroud='gray_600'
        onPress={() => navigation.navigate('home')}
      >
        <TextAtom>Ir para a página inicial</TextAtom>
      </ButtonTouchableOpacityAton>
    </ContentTemplate>
  );
}
