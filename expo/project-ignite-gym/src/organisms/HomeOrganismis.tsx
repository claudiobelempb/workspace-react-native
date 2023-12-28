import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { DefaultTemplates } from '@templates/DefaultTemplates';
import { FlatList } from 'react-native';

import { ContentAtoms } from '@atoms/ContentAtoms';
import { CardCategory } from '@molecules/CardCategory';
import { CardHome } from '@molecules/CardHome';
import { useState } from 'react';

type CategoryType = {
  categoryId: string;
  name: string;
  active: boolean;
};
export function HomeOrganismis() {
  const [categories, setCategories] = useState<CategoryType[]>([
    { categoryId: '1', name: 'Costas', active: true },
    { categoryId: '2', name: 'Bíceps', active: false },
    { categoryId: '3', name: 'Tríceps', active: true },
    { categoryId: '4', name: 'Ombro', active: false },
    { categoryId: '5', name: 'Quadric', active: true }
  ]);

  const [categorySelected, setCategorySelected] = useState('1');

  function handleButtomSelected(selected: string) {
    setCategorySelected(selected);
  }

  return (
    <DefaultTemplates>
      <ContentAtoms $bg={{ $background: 'gray_700' }} $space={{ $py: 'm24' }}>
        <BoxAtoms $height={{ $height: 50 }} $space={{ $mx: 'l32' }}>
          <FlatList
            data={categories}
            keyExtractor={item => item.categoryId}
            renderItem={({ item }) => (
              <CardCategory
                isActive={categorySelected === item.categoryId}
                onPress={() => handleButtomSelected(item.categoryId)}
                name={item.name}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </BoxAtoms>

        <BoxAtoms
          $height={{ $height: 30 }}
          $flex={{ $flexDirection: 'row', $justifyContent: 'space-between' }}
          $space={{ $py: 's8' }}
        >
          <TextAtoms
            $color={{ $color: 'gray_100' }}
            $font={{ $weigh: '700', $size: 'm16' }}
          >
            Exercícios
          </TextAtoms>
          <TextAtoms $color={{ $color: 'gray_100' }} $font={{ $size: 's14' }}>
            4
          </TextAtoms>
        </BoxAtoms>
      </ContentAtoms>
      <ContentAtoms
        $bg={{ $background: 'gray_700' }}
        $space={{ $py: 'm24' }}
        $flex={{ $flex: 1 }}
      >
        <BoxAtoms>
          <FlatList
            data={['consta', 'bíceps']}
            renderItem={({ item }) => <CardHome />}
            showsVerticalScrollIndicator={false}
          />
        </BoxAtoms>
      </ContentAtoms>
    </DefaultTemplates>
  );
}
