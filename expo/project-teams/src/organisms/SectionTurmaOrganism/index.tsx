import { HeadingAton } from '@atoms/HeadingAtom';
import { TextAton } from '@atoms/TextAtom';

import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { UsersThree } from 'phosphor-react-native';

export function SectionTurmaOrganism({ ...props }: typeDefault) {
  return (
    <>
      <BoxTemplate alingItems='center' marginBottom={30}>
        {props.isIcon && <UsersThree size={56} color={'#00B37E'} />}
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
