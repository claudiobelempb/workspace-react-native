import { HeadingAton } from '@atoms/HeadingAtom';
import { CardStatisticsMolecules } from '@molecules/CardStatisticsMolecules';
import { HeaderStatisticsMolecules } from '@molecules/HeaderStatisticsMolecules';
import { useFocusEffect } from '@react-navigation/native';
import { MealDTO } from '@storage/meals/MealDTO';
import { MealFindAll } from '@storage/meals/MealFindAll';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

export function MeallStatisticsOrganismis({ onPress }: typeDefault) {
  const [meals, setMeals] = useState<MealDTO[]>([]);

  const [loading, setLoading] = useState(true);

  const alertError = (message: string) =>
    Alert.alert('Editar refeição', message);

  async function fetchMealFindById() {
    try {
      setLoading(true);
      const data = await MealFindAll();

      console.log(data);
      setMeals(data);
    } catch (error) {
      console.log(error);
      alertError('Não foi porsivel carregar.');
    } finally {
      setLoading(false);
    }
  }

  const totalMeals = meals.length;
  const inside = meals.filter(meal => meal.status === true);
  const outside = meals.filter(meal => meal.status === false);
  const totalInside = (inside.length / totalMeals) * 100;
  console.log(outside.length);

  useFocusEffect(
    useCallback(() => {
      fetchMealFindById();
    }, [])
  );

  return (
    <>
      <HeaderStatisticsMolecules totalInside={totalInside} status={true} />
      <ContentTemplate space={{ marginY: 'm24px', paddingX: 'm24px' }}>
        <HeadingAton
          textAlign='center'
          variantColor='gray_700'
          fontSize='s14px'
          fontWeigh='700'
          space={{ marginX: 'm24px' }}
        >
          Estatísticas gerais
        </HeadingAton>

        <CardStatisticsMolecules
          title='22'
          description='melhor sequência de pratos dentro da dieta'
          variantBackgroud='gray_200'
        />

        <CardStatisticsMolecules
          title={`${totalMeals}`}
          description='refeições registradas'
          variantBackgroud='gray_200'
        />

        <BoxTemplate
          direction='row'
          alingItems='center'
          justifyContent='center'
          columnGap={10}
        >
          <CardStatisticsMolecules
            title={`${inside.length}`}
            description='refeições dentro da dieta'
            variantBackgroud='green_100'
            maxWidth={125}
          />
          <CardStatisticsMolecules
            title={`${outside.length}`}
            description='refeições fora da dieta'
            variantBackgroud='red_100'
            maxWidth={125}
          />
        </BoxTemplate>
      </ContentTemplate>
    </>
  );
}
