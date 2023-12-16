import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { IconAtom } from '@atoms/IconAtom';
import { TextAtom } from '@atoms/TextAtom';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealParamsType } from '@storage/meals/MealDTO';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

type Props = {
  status?: boolean;
  totalInside: number;
} & typeDefault;

export function HeaderStatisticsMolecules({ totalInside }: Props) {
  const { variant } = useTheme();

  const navigation = useNavigation();
  const router = useRoute();
  const { status } = router.params as MealParamsType;
  return (
    <ContentTemplate
      variantBackgroud={status ? 'green_100' : 'red_100'}
      maxHeight={168}
    >
      <StatusBar
        barStyle='dark-content'
        translucent={true}
        backgroundColor={status ? variant.green_100 : variant.red_100}
      />
      <BoxTemplate>
        <ButtonTouchableOpacityAton
          icon='left'
          maxWidth={56}
          onPress={() => navigation.goBack()}
        >
          <IconAtom
            typeIcon='arrow-left'
            size={24}
            color={status ? variant.green_700 : variant.red_700}
          />
        </ButtonTouchableOpacityAton>
        <HeadingAton textAlign='center' variantColor='gray_700'>
          {totalInside}%
        </HeadingAton>
        <TextAtom textAlign='center' variantColor='gray_600'>
          das refeições dentro da dieta
        </TextAtom>
      </BoxTemplate>
    </ContentTemplate>
  );
}
