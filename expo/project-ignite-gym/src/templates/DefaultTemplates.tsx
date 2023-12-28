import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { typeDefault } from '@typesDefault/typesDefault';

import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtoms } from '@atoms/IconAtoms';
import { TextAtoms } from '@atoms/TextAtoms';

export function DefaultTemplates({ children }: typeDefault) {
  return (
    <>
      <ContainerAtoms $bg={{ $background: 'gray_600' }} $flex={{ $flex: 1 }}>
        <ContentAtoms
          $height={{ $height: 150 }}
          $flex={{ $flexDirection: 'row' }}
          $bg={{ $background: 'gray_600' }}
          $space={{ $py: 'm24' }}
        >
          <BoxAtoms
            $flex={{
              $flexDirection: 'row',
              $alingItems: 'center',
              $justifyContent: 'space-between'
            }}
          >
            <BoxAtoms
              $width={{ $width: 50 }}
              $flex={{
                $flexDirection: 'row',
                $alingItems: 'center',
                $justifyContent: 'space-between',
                $columnGap: 10
              }}
            >
              <IconAtoms
                name='user'
                $color={{ $color: 'gray_100' }}
                $font={{ $size: 'x60' }}
                $border={{
                  $b: { width: 2, color: 'gray_100', style: 'solid ' },
                  $r: { width: 50 }
                }}
                $space={{ $p: 's5' }}
              />

              <BoxAtoms $flex={{ $rowGap: 5 }}>
                <TextAtoms $color={{ $color: 'gray_100' }}>Olá, </TextAtoms>
                <TextAtoms
                  $font={{ $weigh: '700' }}
                  $color={{ $color: 'gray_100' }}
                >
                  Rodrigo Gonçalves
                </TextAtoms>
              </BoxAtoms>
            </BoxAtoms>
            <BoxAtoms
              $flex={{ $justifyContent: 'flex-end', $alingItems: 'flex-end' }}
              $width={{ $width: 50 }}
            >
              <ButtonTouchableOpacityAton>
                <IconAtoms
                  name='log-in'
                  $width={{ $width: 28 }}
                  $color={{ $color: 'gray_100' }}
                  $font={{ $weigh: '700', $size: 'm24' }}
                />
              </ButtonTouchableOpacityAton>
            </BoxAtoms>
          </BoxAtoms>
        </ContentAtoms>
        <ContentAtoms
          $bg={{ $background: 'gray_700' }}
          $space={{ $py: 'm24' }}
          $flex={{ $flex: 1 }}
        >
          {children}
        </ContentAtoms>
      </ContainerAtoms>
    </>
  );
}
