import { HeadingAton } from '@atoms/HeadingAtom';
import { TextAtom } from '@atoms/TextAtom';
import React from 'react';

import { IconAtom } from '@atoms/IconAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components/native';

export default function SectionTurmaOrganism({ ...props }: typeDefault) {
  const { variant } = useTheme();

  return (
    <ContentTemplate isWidth marginBottom={32}>
      <BoxTemplate marginBottom={32} alignSelf='center'>
        {props.isIcon && (
          <IconAtom
            family='Feather'
            nameFeather='users'
            size={56}
            color={variant.green_700}
          />
        )}
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
