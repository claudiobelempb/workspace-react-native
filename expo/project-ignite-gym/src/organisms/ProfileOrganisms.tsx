import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';

export function ProfileOrganisms() {
  const { color } = useTheme();
  return (
    <ContainerAtoms $bg={{ $background: 'gray_500' }} $flex={{ $flex: 1 }}>
      <ContentAtoms>
        <BoxAtoms
          $height={{ $height: 100 }}
          $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
        >
          <HeadingAtoms
            $color={{ $color: 'gray_100' }}
            $text={{ $align: 'center' }}
            $font={{ $weigh: '700', $size: 'm20' }}
          >
            Perfil
          </HeadingAtoms>
        </BoxAtoms>
      </ContentAtoms>
      <ContentAtoms
        $bg={{ $background: 'gray_700' }}
        $flex={{ $flex: 1, $alingItems: 'center' }}
      >
        <ScrollView
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: color.gray_700,
            padding: 24
          }}
        >
          <BoxAtoms
            $flex={{
              $rowGap: 10,
              $justifyContent: 'center',
              $alingItems: 'center'
            }}
          >
            <ImageAtoms
              source={{ uri: 'https://github.com/claudiobelempb.png' }}
              $width={{ $width: 100 }}
              $height={{ $height: 100 }}
              $border={{
                $b: { width: 2, color: 'gray_100', style: 'solid ' },
                $r: { width: 50 }
              }}
              $space={{ $p: 's5' }}
            />
            <TextAtoms
              $color={{ $color: 'green_500' }}
              $font={{ $weigh: '700', $size: 'm20' }}
              $text={{ $align: 'center' }}
            >
              Alterar foto
            </TextAtoms>
          </BoxAtoms>
          <BoxAtoms
            $width={{ $width: 100 }}
            $flex={{ $rowGap: 10 }}
            $space={{ $mt: 'l32' }}
          >
            <TextInputAtom
              placeholder='Rodrigo Gonçalves'
              $bg={{ $background: 'gray_500' }}
            />
            <TextInputAtom
              placeholder='rodrigo@email.com'
              $bg={{ $background: 'gray_500' }}
            />
          </BoxAtoms>
          <BoxAtoms
            $width={{ $width: 100 }}
            $flex={{ $rowGap: 10 }}
            $space={{ $mt: 'l32' }}
          >
            <TextAtoms $color={{ $color: 'gray_100' }}>Alterar senha</TextAtoms>
            <TextInputAtom
              placeholder='Senha antiga'
              $bg={{ $background: 'gray_500' }}
            />
            <TextInputAtom
              placeholder='Nova senha'
              $bg={{ $background: 'gray_500' }}
            />
          </BoxAtoms>
          <BoxAtoms $width={{ $width: 100 }} $space={{ $mx: 'l32' }}>
            <ButtonTouchableOpacityAton
              $height={{ $height: 56 }}
              $bg={{ $background: 'green_500' }}
              $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
              $border={{ $r: { width: 8 } }}
            >
              <TextAtoms
                $color={{ $color: 'gray_100' }}
                $font={{ $weigh: '700' }}
              >
                Atualizar
              </TextAtoms>
            </ButtonTouchableOpacityAton>
          </BoxAtoms>
        </ScrollView>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
