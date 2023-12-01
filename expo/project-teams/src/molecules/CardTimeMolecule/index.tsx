import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import React from 'react';
import { useTheme } from 'styled-components/native';

type CardTimeMoleculeProps = {} & typeDefault;

export function CardTimeMolecule({ ...props }: CardTimeMoleculeProps) {
  const { variant } = useTheme();

  return (
    <ContentTemplate
      direction='row'
      marginBottom={10}
      isBorderRadius
      isWidth
      variantBackgroud='gray_500'
      space={{ paddingY: 's8px', paddingX: 'l32px' }}
    >
      <BoxTemplate
        direction='row'
        alingItems='center'
        flex={1}
        isWidth
        columnGap={10}
        space={{ paddingY: 's8px' }}
      >
        <IconAtom
          family='Feather'
          nameFeather='user'
          size={24}
          color={variant.white}
        />
        <TextAtom isWidth flex={1}>
          {props.name}
        </TextAtom>
      </BoxTemplate>

      <BoxTemplate
        alignSelf='center'
        direction='row'
        space={{ padding: 's8px' }}
      >
        <ButtonTouchableOpacityAton
          onPress={props.onPress}
          space={{ padding: 's8px' }}
        >
          <IconAtom
            family='Feather'
            nameFeather='x'
            size={24}
            color={variant.red_900}
          />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </ContentTemplate>
  );
}
