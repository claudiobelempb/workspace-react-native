import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components/native';

type Pros = {
  inSide?: boolean;
} & typeDefault;

export function HeaderFormMolecules({ onPress, title, ...props }: Pros) {
  const { variant } = useTheme();
  return (
    <ContentTemplate
      variantBackgroud={props.variantBackgroud}
      space={{ paddingY: 'm24px' }}
    >
      <BoxTemplate direction='row' minHeight={100} alingItems='center'>
        <ButtonTouchableOpacityAton icon='left' maxWidth={56} onPress={onPress}>
          <IconAtom typeIcon='arrow-left' size={24} color={variant.gray_600} />
        </ButtonTouchableOpacityAton>
        <TextAtom
          flex={1}
          variantColor='gray_700'
          fontWeigh='700'
          textAlign='center'
          maxWidth={303 - 56}
        >
          {title}
        </TextAtom>
      </BoxTemplate>
    </ContentTemplate>
  );
}
