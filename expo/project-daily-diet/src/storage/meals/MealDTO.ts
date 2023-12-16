import { SectionListData } from 'react-native';

export type MealParamsType = {
  status: boolean;
};

export type MealIdParams = {
  mealId: string;
};

export type MealDTO = {
  mealId: string;
  name: string;
  description: string;
  date: string;
  hora: string;
  status: boolean;
};

export type SectionMealDTO = {
  date: string; // <-- Change me
  data: MealDTO[];
};

export type SectionListMealProps = {
  sections: SectionListData<MealDTO, SectionMealDTO>[];
};

export type RenderSectionMealHeaderArgs = {
  section: SectionListData<MealDTO, SectionMealDTO>;
};
