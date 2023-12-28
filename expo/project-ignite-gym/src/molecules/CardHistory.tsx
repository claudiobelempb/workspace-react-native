import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';

export function CardHistory() {
  return (
    <ContentAtoms
      $space={{ $p: 'm24' }}
      $bg={{ $background: 'gray_700' }}
      $flex={{ $flex: 1 }}
    >
      <BoxAtoms>
        <HeadingAtoms $color={{ $color: 'gray_100' }} $space={{ $px: 'm16' }}>
          26.08.22
        </HeadingAtoms>
        <BoxAtoms
          $bg={{ $background: 'gray_500' }}
          $space={{ $p: 'm16' }}
          $border={{ $r: { width: 8 } }}
          $flex={{
            $flexDirection: 'row',
            $alingItems: 'center',
            $justifyContent: 'space-between'
          }}
        >
          <BoxAtoms $flex={{ $rowGap: 8 }}>
            <TextAtoms $color={{ $color: 'gray_100' }}>Costas</TextAtoms>
            <TextAtoms $color={{ $color: 'gray_100' }}>
              Puxada frontal
            </TextAtoms>
          </BoxAtoms>
          <BoxAtoms>
            <TextAtoms $color={{ $color: 'gray_300' }}>08:56</TextAtoms>
          </BoxAtoms>
        </BoxAtoms>
      </BoxAtoms>
    </ContentAtoms>
  );
}
