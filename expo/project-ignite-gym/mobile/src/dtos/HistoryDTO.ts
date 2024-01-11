import { SectionListData } from 'react-native';
import { ExerciseDTO } from './ExerciseDTO';

export type SectionHistoryDTO = {
  date: string;
  data: ExerciseDTO[];
};

export type SectionListHistoryProps = {
  sections: SectionListData<ExerciseDTO, SectionHistoryDTO>[];
};

export type RenderSectionHistoryHeaderArgs = {
  section: SectionListData<ExerciseDTO, SectionHistoryDTO>;
};
