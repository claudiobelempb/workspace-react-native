import { useCategoryFindAll } from '@hooks/category/useCategoryFindAll';
import { AppError } from '@utils/AppError';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
import Toast from 'react-native-toast-message';
import { CardCategoryMolecules } from './CardCategoryMolecules';
import { ListEmptyMolecules } from './ListEmptyMolecules';

type ItemProps = {
  item: string;
};

type Props = {
  onButtomSelected: (category: string) => void;
  category: string;
};

export function CategoryFlatListMolecules({
  category,
  onButtomSelected
}: Props) {
  const [categories, setCategories] = useState<string[]>([]);

  async function fetchCategoryFindAll() {
    try {
      const response = await useCategoryFindAll();
      setCategories(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const msg = isAppError
        ? error.message
        : 'Não foi possível carregar as categorias muscularres.';
      Toast.show({
        text1: msg,
        type: 'error',
        position: 'top'
      });
    }
  }

  const keyExtractor = (item: string) => item;

  const Item = ({ item }: ItemProps) => (
    <CardCategoryMolecules
      isActive={category === item}
      onPress={() => onButtomSelected(item)}
      name={item}
    />
  );

  const renderItem: ListRenderItem<string> = ({
    item
  }: ListRenderItemInfo<string>) => <Item item={item} />;

  useEffect(() => {
    fetchCategoryFindAll();
  }, []);

  return (
    <FlatList
      style={{ marginHorizontal: 24 }}
      data={categories}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={() => (
        <ListEmptyMolecules
          $mensagem='Não há categorias registrada.'
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
