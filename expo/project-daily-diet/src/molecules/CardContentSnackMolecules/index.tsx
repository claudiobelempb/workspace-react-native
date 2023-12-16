import { TextAtom } from '@atoms/TextAtom';
import { CardItemSnackMolecules } from '@molecules/CardItemSnackMolecules';
import { FoodDTO } from '@storage/meals/FoodDTO';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import React from 'react';
import { FlatList } from 'react-native';

export function CardContentSnackMolecules(foods: FoodDTO[]) {
  // const [foods, setFoods] = useState<FoodDTO[]>([
  //   {
  //     foodId: '1',
  //     name: 'X-tudo',
  //     description:
  //       'Sanduíche de pão integral com atum e salada de alface e tomate',
  //     date: '12.08.22',
  //     hora: '20:00',
  //     status: 'inside'
  //   },
  //   {
  //     foodId: '2',
  //     name: 'Whey protein com leite',
  //     description:
  //       'Sanduíche de pão integral com atum e salada de alface e tomate',
  //     date: '12.08.22',
  //     hora: '16:00',
  //     status: 'outside'
  //   },
  //   {
  //     foodId: '3',
  //     name: 'Salada cesar com frango grelhado',
  //     description:
  //       'Sanduíche de pão integral com atum e salada de alface e tomate',
  //     date: '12.08.22',
  //     hora: '12:30',
  //     status: 'outside'
  //   },
  //   {
  //     foodId: '4',
  //     name: 'Vitamina de banana com abacate',
  //     description:
  //       'Sanduíche de pão integral com atum e salada de alface e tomate',
  //     date: '12.08.22',
  //     hora: '09:30',
  //     status: 'inside'
  //   }
  // ]);
  return (
    <ContentTemplate space={{ marginTop: 'm16px' }}>
      <TextAtom
        fontWeigh='700'
        fontSize='m18px'
        variantColor='gray_700'
        space={{ marginBottom: 's8px' }}
      >
        12.08.22
      </TextAtom>
      <FlatList
        data={foods}
        renderItem={({ item }) => (
          <BoxTemplate space={{ marginBottom: 'm24px' }} flex={1}>
            <CardItemSnackMolecules
              minHeight={50}
              food={item}
              onPress={() => console.log(item)}
            />
          </BoxTemplate>
        )}
        keyExtractor={item => item.foodId}
        showsVerticalScrollIndicator={false}
      />
    </ContentTemplate>
  );
}
