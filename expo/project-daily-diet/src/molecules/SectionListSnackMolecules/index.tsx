import { TextAtom } from '@atoms/TextAtom';
import { CardItemSnackMolecules } from '@molecules/CardItemSnackMolecules';
import {
  MealDTO,
  RenderSectionMealHeaderArgs,
  SectionListMealProps
} from '@storage/meals/MealDTO';
import { SectionList, SectionListRenderItem } from 'react-native';

export function SectionListSnackMolecules({ sections }: SectionListMealProps) {
  const renderSectionHeader = ({
    section: { date, data }
  }: RenderSectionMealHeaderArgs) => {
    return (
      <TextAtom fontSize='m24px' fontWeigh='700' variantColor='gray_700'>
        {date}
      </TextAtom>
    );
  };

  const renderSectionItem: SectionListRenderItem<MealDTO> = ({ item }) => (
    <CardItemSnackMolecules meal={item} />
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.mealId}
      renderItem={renderSectionItem}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={
        sections.length === 0 && {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    />
  );
}
