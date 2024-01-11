import { SectionListData } from 'react-native';

export type HistoryDTO = {
  id: string;
  name: string;
  group: string;
  hour: string;
  created_at: string;
};

export type SectionHistoryDTO = {
  title: string;
  data: HistoryDTO[];
};

export type SectionListHistoryProps = {
  sections: SectionListData<HistoryDTO, SectionHistoryDTO>[];
};

export type RenderSectionHistoryHeaderArgs = {
  section: SectionListData<HistoryDTO, SectionHistoryDTO>;
};
