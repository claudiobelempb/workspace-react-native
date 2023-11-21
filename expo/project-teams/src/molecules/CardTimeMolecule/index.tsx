import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components';

export function CardTimeMolecule({ ...props }: typeDefault) {
  const { variant } = useTheme();

  return (
    <ContentTemplate
      direction='row'
      marginBottom={10}
      isBorderRadius
      isWidth
      variantBackgroud='gray_500'
    >
      <BoxTemplate
        direction='row'
        alingItems='center'
        minHeight={54}
        columnGap={10}
        padding={10}
        flex={1}
      >
        <IconAtom icon='User' color={variant.white} />
        <TextAtom>{props.name}</TextAtom>
      </BoxTemplate>

      <BoxTemplate
        alignSelf='center'
        direction='row'
        minHeight={56}
        minWidth={56}
        maxWidth={56}
        padding={5}
      >
        <ButtonTouchableOpacityAton onPress={props.onPress}>
          <IconAtom icon='X' color={variant.red_900} size={24} />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </ContentTemplate>
  );
}
