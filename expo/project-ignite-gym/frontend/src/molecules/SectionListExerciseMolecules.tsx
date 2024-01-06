import { TextAtoms } from '@atoms/TextAtoms';
import React from 'react';
import { SectionList, SectionListRenderItem } from 'react-native';
import {
  ExerciseDTO,
  RenderSectionExerciseHeaderArgs,
  SectionExerciselDTO,
  SectionListExerciseProps
} from 'src/dtos/ExerciseDTO';
import { CardExerciseMolecules } from './CardExerciseMolecules';
import { ListEmptyMolecules } from './ListEmptyMolecules';

export function SectionListExerciseMolecules({
  sections
}: SectionListExerciseProps) {
  const renderSectionHeader = ({
    section: { date, data }
  }: RenderSectionExerciseHeaderArgs) => {
    return (
      <TextAtoms
        $font={{ $size: 'm24', $weigh: '700' }}
        $color={{ $color: 'gray_100' }}
        $space={{ $mb: 'm16' }}
      >
        {date}
      </TextAtoms>
    );
  };

  const renderSectionItem: SectionListRenderItem<
    ExerciseDTO,
    SectionExerciselDTO
  > = ({ item }) => <CardExerciseMolecules exercise={item} />;

  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.exerciseId}
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
