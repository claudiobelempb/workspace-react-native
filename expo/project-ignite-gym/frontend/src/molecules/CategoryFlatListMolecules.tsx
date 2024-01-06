import React, { useState } from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { CategoryDTO } from 'src/dtos/CategoryDTO';
import { CardCategoryMolecules } from './CardCategoryMolecules';
import { ListEmptyMolecules } from './ListEmptyMolecules';

type Props = {
  categories: CategoryDTO[];
};
export function CategoryFlatListMolecules({ categories }: Props) {
  const [categorySelected, setCategorySelected] = useState('1');

  function handleButtomSelected(selected: string) {
    setCategorySelected(selected);
  }

  const keyExtractor = (item: CategoryDTO) => item.categoryId;

  const Item = ({ ...item }: CategoryDTO) => (
    <CardCategoryMolecules
      isActive={categorySelected === item.categoryId}
      onPress={() => handleButtomSelected(item.categoryId)}
      name={item.name}
    />
  );

  const renderItem: ListRenderItem<CategoryDTO> = ({
    item
  }: ListRenderItemInfo<CategoryDTO>) => <Item {...item} />;

  return (
    <FlatList
      style={{ marginHorizontal: 24 }}
      data={categories}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={() => (
        <ListEmptyMolecules
          $mensagem='Não há exercício registrado.'
          $color={{ $color: 'gray_100' }}
          $text={{ $align: 'center' }}
        />
      )}
      contentContainerStyle={
        categories.length === 0 && {
          flex: 1,
          justifyContent: 'center'
        }
      }
      horizontal={true}
    />
  );
}
