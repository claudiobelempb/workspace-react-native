import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

type Props = {
  title: string;
  description: string;
} & typeDefault;

export function CardStatisticsMolecules({
  title,
  description,
  variantBackgroud,
  space,
  maxWidth
}: Props) {
  return (
    <>
      <BoxTemplate
        variantBackgroud={variantBackgroud}
        isBorderRadius
        space={{ padding: 'm24px', marginX: 's8px' }}
      >
        <TextAtom
          textAlign='center'
          variantColor='gray_700'
          fontSize='m24px'
          fontWeigh='700'
          maxWidth={maxWidth}
        >
          {title}
        </TextAtom>
        <TextAtom
          textAlign='center'
          variantColor='gray_700'
          fontSize='s14px'
          maxWidth={maxWidth}
        >
          {description}
        </TextAtom>
      </BoxTemplate>
    </>
  );
}
