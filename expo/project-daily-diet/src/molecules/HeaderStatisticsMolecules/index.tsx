import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

type Pros = {
  inSide?: boolean;
} & typeDefault;

export function HeaderStatisticsMolecules({ onPress, inSide }: Pros) {
  const { variant } = useTheme();
  return (
    <ContentTemplate
      variantBackgroud={inSide ? 'green_100' : 'red_100'}
      maxHeight={168}
    >
      <StatusBar
        barStyle='dark-content'
        translucent={true}
        backgroundColor={inSide ? variant.green_100 : variant.red_100}
      />
      <BoxTemplate>
        <ButtonTouchableOpacityAton icon='left' maxWidth={56} onPress={onPress}>
          <IconAtom
            typeIcon='arrow-left'
            size={24}
            color={inSide ? variant.green_700 : variant.red_700}
          />
        </ButtonTouchableOpacityAton>
        <HeadingAton textAlign='center' variantColor='gray_700'>
          90,86%
        </HeadingAton>
        <TextAtom textAlign='center' variantColor='gray_600'>
          das refeições dentro da dieta
        </TextAtom>
      </BoxTemplate>
    </ContentTemplate>
  );
}
