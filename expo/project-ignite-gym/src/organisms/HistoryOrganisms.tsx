import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { CardHistory } from '@molecules/CardHistory';

export function HistoryOrganisms() {
  return (
    <ContainerAtoms $bg={{ $background: 'gray_500' }} $flex={{ $flex: 1 }}>
      <ContentAtoms>
        <BoxAtoms
          $height={{ $height: 124 }}
          $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
        >
          <HeadingAtoms
            $color={{ $color: 'gray_100' }}
            $text={{ $align: 'center' }}
            $font={{ $weigh: '700', $size: 'm20' }}
          >
            Histórico de Exercícios
          </HeadingAtoms>
        </BoxAtoms>
      </ContentAtoms>
      <CardHistory />
    </ContainerAtoms>
  );
}
