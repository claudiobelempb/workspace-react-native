import { HeadingAton } from '@atoms/HeadingAtom';
import { CardStatisticsMolecules } from '@molecules/CardStatisticsMolecules';
import { HeaderStatisticsMolecules } from '@molecules/HeaderStatisticsMolecules';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function StatisticsOrganismis({ onPress }: typeDefault) {
  return (
    <>
      <HeaderStatisticsMolecules onPress={onPress} inSide={false} />
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
          title='109'
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
            title='99'
            description='refeições dentro da dieta'
            variantBackgroud='green_100'
            maxWidth={125}
          />
          <CardStatisticsMolecules
            title='10'
            description='refeições fora da dieta'
            variantBackgroud='red_100'
            maxWidth={125}
          />
        </BoxTemplate>
      </ContentTemplate>
    </>
  );
}
