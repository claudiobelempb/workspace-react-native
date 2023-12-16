import { TouchableOpacityContainer } from '@atoms/ButtonTouchableOpacityAtom/styles';
import { SeparationVerticalAtoms } from '@atoms/SeparationVerticalAtoms';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
import { useNavigation } from '@react-navigation/native';
import { MealDTO } from '@storage/meals/MealDTO';
import { typeDefault } from '@typesDefault/typesDefault';
import { TouchableOpacityProps } from 'react-native';

type Props = {
  icon?: 'left' | 'right';
  meal: MealDTO;
} & TouchableOpacityProps &
  typeDefault;

export function CardItemSnackMolecules({ meal, ...props }: Props) {
  const navigation = useNavigation();

  function handleGoMealShow(mealId: string) {
    navigation.navigate('show', { mealId });
  }

  return (
    <TouchableOpacityContainer
      minHeight={49}
      isBorderRadius
      variantBackgroud='gray_100'
      variantBorderColor='gray_200'
      direction={'row'}
      alingItems={'center'}
      justifyContent={'space-between'}
      columnGap={10}
      space={{
        paddingX: 'm24px',
        paddingY: 'm16px',
        marginBottom: 's8px'
      }}
      position={props.position}
      selected={props.selected}
      onPress={() => handleGoMealShow(meal.mealId)}
    >
      <TextAtom variantColor='gray_700' fontSize='m16px'>
        {meal.hora}
      </TextAtom>
      <SeparationVerticalAtoms />
      <TextAtom flex={1} variantColor='gray_700' fontSize='m16px'>
        {meal.name}
      </TextAtom>
      <StatusAtoms isSelected={meal.status} />
    </TouchableOpacityContainer>
  );
}
