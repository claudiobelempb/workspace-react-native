import { HeadingAton } from '@atoms/HeadingAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAton } from '@atoms/TextAtom';

import ImageGrup from '@assets/Icons.png';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function SectionTurmaOrganism({ ...props }: typeDefault) {
  return (
    <>
      <BoxTemplate alingItems='center'>
        {props.isIcon && (
          <ImageAtom source={ImageGrup} width={56} height={56} />
        )}
      </BoxTemplate>
      <BoxTemplate>
        <HeadingAton textAlign='center'>{props.title}</HeadingAton>
        <TextAton textAlign='center' variantColor='gray_300'>
          {props.description}
        </TextAton>
      </BoxTemplate>
    </>
  );
}
