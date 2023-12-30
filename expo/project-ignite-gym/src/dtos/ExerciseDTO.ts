import { SectionListData } from 'react-native';

export type ExerciseParamsType = {
  status: boolean;
};

type CategoryType = {
  categoryId: string;
  name: string;
  active: boolean;
};

export type ExerciseDTO = {
  exerciseId: string;
  name: string;
  series: number;
  repetitions: number;
  active: boolean;
  created: string;
  category: CategoryType;
};

export type SectionExerciselDTO = {
  date: string;
  data: ExerciseDTO[];
};

export type SectionListExerciseProps = {
  sections: SectionListData<ExerciseDTO, SectionExerciselDTO>[];
};

export type RenderSectionExerciseHeaderArgs = {
  section: SectionListData<ExerciseDTO, SectionExerciselDTO>;
};
