import { SectionListData } from 'react-native';

export type ExerciseParamsType = {
  status: boolean;
};

export type ExerciseIdParamsProps = {
  exerciseId: string;
};

export type ExerciseDTO = {
  id: string;
  name: string;
  series: number;
  repetitions: number;
  group: string;
  created_at: string;
  updated_at: string;
  thumb: string;
  demo: string;
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
