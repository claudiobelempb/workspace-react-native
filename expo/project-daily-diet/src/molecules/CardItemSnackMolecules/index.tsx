import { TouchableOpacityContainer } from '@atoms/ButtonTouchableOpacityAtom/styles';
import { SeparationVerticalAtoms } from '@atoms/SeparationVerticalAtoms';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
import { typeDefault } from '@typesDefault/typesDefault';
import { TouchableOpacityProps } from 'react-native';

type SnackProps = {
  date: string;
  foods: [
    {
      foodId: number;
      hora: string;
      name: string;
      status: boolean;
    }
  ];
};

type Props = {
  icon?: 'left' | 'right';
  snack: {
    foodId: string;
    date: string;
    hora: string;
    name: string;
    description: string;
    status: boolean;
  };
} & TouchableOpacityProps &
  typeDefault;

export function CardItemSnackMolecules({ snack, ...props }: Props) {
  return (
    <TouchableOpacityContainer
      minHeight={props.minHeight}
      isWidth={props.isWidth}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      isBorderRadius
      variantBackgroud='gray_100'
      variantBorderColor='gray_200'
      direction={'row'}
      alignSelf={props.alignSelf}
      alingItems={'center'}
      alingContent={props.alingContent}
      justifyContent={'space-between'}
      columnGap={10}
      flex={props.flex}
      rowGap={props.rowGap}
      onPress={props.onPress}
      isActive={props.isActive}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
      space={{
        paddingX: 'm24px',
        paddingY: 'm16px',
        marginBottom: 's8px'
      }}
      position={props.position}
      selected={props.selected}
    >
      <TextAtom variantColor='gray_700'>{snack.hora}</TextAtom>
      <SeparationVerticalAtoms />
      <TextAtom flex={1} variantColor='gray_700'>
        {snack.name}
      </TextAtom>
      <StatusAtoms isSelected={snack.status} />
    </TouchableOpacityContainer>
  );
}
