import { HeadingAton } from '@atoms/HeadingAtom';
import { TextAtom } from '@atoms/TextAtom';

import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { UsersThree } from 'phosphor-react-native';

export function SectionTurmaOrganism({ ...props }: typeDefault) {
  return (
    <ContentTemplate isWidth marginBottom={32}>
      <BoxTemplate marginBottom={32} alignSelf='center'>
        {props.isIcon && <UsersThree size={56} color={'#00B37E'} />}
      </BoxTemplate>
      <BoxTemplate isWidth>
        <HeadingAton textAlign='center' isWidth>
          {props.title}
        </HeadingAton>
        <TextAtom isWidth variantColor='gray_300' textAlign='center'>
          {props.description}
        </TextAtom>
      </BoxTemplate>
    </ContentTemplate>
  );
}
