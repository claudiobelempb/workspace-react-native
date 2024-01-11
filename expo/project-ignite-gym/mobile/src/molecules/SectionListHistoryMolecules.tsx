import { TextAtoms } from '@atoms/TextAtoms';
import React from 'react';
import { SectionList, SectionListRenderItem } from 'react-native';
import {
  HistoryDTO,
  RenderSectionHistoryHeaderArgs,
  SectionHistoryDTO,
  SectionListHistoryProps
} from 'src/dtos/HistoryDTO';
import { CardHistoryMolecules } from './CardHistoryMolecules';
import { ListEmptyMolecules } from './ListEmptyMolecules';

export function SectionListHistoryMolecules({
  sections
}: SectionListHistoryProps) {
  const renderSectionHeader = ({
    section: { title, data }
  }: RenderSectionHistoryHeaderArgs) => {
    return (
      <TextAtoms
        $font={{ $size: 'm24', $weigh: '700' }}
        $color={{ $color: 'gray_100' }}
        $space={{ $mb: 'm16' }}
      >
        {title}
      </TextAtoms>
    );
  };

  const keyExtractor = (item: HistoryDTO) => item.id;

  const renderSectionItem: SectionListRenderItem<
    HistoryDTO,
    SectionHistoryDTO
  > = ({ item }) => <CardHistoryMolecules exercise={item} />;

  return (
    <SectionList
      sections={sections}
      keyExtractor={keyExtractor}
      renderItem={renderSectionItem}
      renderSectionHeader={renderSectionHeader}
      ListEmptyComponent={() => (
        <ListEmptyMolecules
          $mensagem='Não há exercício registrado.'
          $color={{ $color: 'gray_100' }}
          $text={{ $align: 'center' }}
        />
      )}
      contentContainerStyle={
        sections.length === 0 && {
          flex: 1,
          justifyContent: 'center'
        }
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
