import { CardContentSnackMolecules } from '@molecules/CardContentSnackMolecules';
import { FoodDTO } from '@storage/meals/FoodDTO';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import React from 'react';
import { FlatList } from 'react-native';

type TypeSnack = {
  foodId: string;
  date: string;
  hora: string;
  name: string;
  description: string;
  status: boolean;
};

type Props = {
  foods: TypeSnack[];
  title?: string;
};

export function CardContainerSnackMolecules(foods: FoodDTO[]) {
  // const [snacks, setSnacks] = useState<Props>({
  //   foods: [
  //     {
  //       foodId: '1',
  //       name: 'X-tudo',
  //       description:
  //         'Sanduíche de pão integral com atum e salada de alface e tomate',
  //       date: '12.08.22',
  //       hora: '20:00',
  //       status: false
  //     },
  //     {
  //       foodId: '2',
  //       name: 'Whey protein com leite',
  //       description:
  //         'Sanduíche de pão integral com atum e salada de alface e tomate',
  //       date: '12.08.22',
  //       hora: '16:00',
  //       status: true
  //     },
  //     {
  //       foodId: '3',
  //       name: 'Salada cesar com frango grelhado',
  //       description:
  //         'Sanduíche de pão integral com atum e salada de alface e tomate',
  //       date: '12.08.22',
  //       hora: '12:30',
  //       status: true
  //     },
  //     {
  //       foodId: '4',
  //       name: 'Vitamina de banana com abacate',
  //       description:
  //         'Sanduíche de pão integral com atum e salada de alface e tomate',
  //       date: '12.08.22',
  //       hora: '09:30',
  //       status: true
  //     }
  //   ]
  // });
  return (
    <ContentTemplate flex={1} space={{ marginTop: 'm24px' }}>
      <FlatList
        data={foods}
        renderItem={({ item }) => (
          <BoxTemplate flex={1}>
            <CardContentSnackMolecules food={item} />
          </BoxTemplate>
        )}
        keyExtractor={item => item.foodId}
        showsVerticalScrollIndicator={false}
      />
    </ContentTemplate>
  );
}
