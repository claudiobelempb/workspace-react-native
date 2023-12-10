import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAtom } from '@atoms/TextAtom';
import { ContentTemplate } from '@templates/ContentTemplate';

import {
  default as ImageDander,
  default as ImageSuccess
} from '@assets/feedback-success.png';
import { useState } from 'react';
export function FeedbackOrganisms() {
  const [isFeedback, setIsFeedback] = useState(false);
  return (
    <ContentTemplate
      columnGap={30}
      space={{ paddingY: 'l32px' }}
      justifyContent='center'
      alingItems='center'
    >
      {isFeedback ? (
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
            dentro da dieta. Muito bem!
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

      <ButtonTouchableOpacityAton variantBackgroud='gray_600'>
        <TextAtom>Ir para a página inicial</TextAtom>
      </ButtonTouchableOpacityAton>
    </ContentTemplate>
  );
}
