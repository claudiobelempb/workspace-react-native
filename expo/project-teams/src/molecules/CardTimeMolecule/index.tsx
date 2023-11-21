import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components';

type CardTimeMoleculeProps = {
  onRemovePlayer: () => void;
} & typeDefault;

export function CardTimeMolecule({ ...props }: CardTimeMoleculeProps) {
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
        minHeight={50}
        padding={10}
        flex={1}
      >
        <IconAtom icon='User' color={variant.white} />
        <TextAtom flex={1}>{props.name}</TextAtom>
      </BoxTemplate>

      <BoxTemplate alignSelf='center' direction='row' minWidth={56} padding={5}>
        <ButtonTouchableOpacityAton onPress={props.onRemovePlayer} padding={5}>
          <IconAtom icon='X' color={variant.red_900} size={24} />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </ContentTemplate>
  );
}
