import { TextAtom } from '@atoms/TextAtom';
import { CardItemSnackMolecules } from '@molecules/CardItemSnackMolecules';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import React, { useState } from 'react';
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

export function CardContentSnackMolecules() {
  const [snacks, setSnacks] = useState<Props>({
    foods: [
      {
        foodId: '1',
        name: 'X-tudo',
        description:
          'Sanduíche de pão integral com atum e salada de alface e tomate',
        date: '12.08.22',
        hora: '20:00',
        status: false
      },
      {
        foodId: '2',
        name: 'Whey protein com leite',
        description:
          'Sanduíche de pão integral com atum e salada de alface e tomate',
        date: '12.08.22',
        hora: '16:00',
        status: true
      },
      {
        foodId: '3',
        name: 'Salada cesar com frango grelhado',
        description:
          'Sanduíche de pão integral com atum e salada de alface e tomate',
        date: '12.08.22',
        hora: '12:30',
        status: true
      },
      {
        foodId: '4',
        name: 'Vitamina de banana com abacate',
        description:
          'Sanduíche de pão integral com atum e salada de alface e tomate',
        date: '12.08.22',
        hora: '09:30',
        status: true
      }
    ]
  });
  return (
    <ContentTemplate flex={1} space={{ marginTop: 'm16px' }}>
      <TextAtom
        fontWeigh='700'
        fontSize='m18px'
        variantColor='gray_700'
        space={{ marginBottom: 's8px' }}
      >
        12.08.22
      </TextAtom>
      <FlatList
        data={snacks.foods}
        renderItem={({ item }) => (
          <BoxTemplate space={{ marginBottom: 'm24px' }}>
            <CardItemSnackMolecules
              minHeight={50}
              snack={item}
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
