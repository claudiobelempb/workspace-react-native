import AvatarDefaultImg from '@assets/userPhotoDefault.png';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { IconAtoms } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { useAuth } from '@hooks/useAuth';

export function HomeHeaderMolecules() {
  const { contextUser, contextSignOut } = useAuth();

  return (
    <ContentAtoms
      $height={{ $height: 150 }}
      $flex={{ $flexDirection: 'row' }}
      $bg={{ $background: 'gray_500' }}
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
          <ImageAtoms
            source={
              contextUser.avatar
                ? { uri: contextUser.avatar }
                : AvatarDefaultImg
            }
            $width={{ $width: 64 }}
            $height={{ $height: 64 }}
            $border={{
              $b: { width: 2, color: 'gray_400', style: 'solid ' },
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
              {contextUser.name}
            </TextAtoms>
          </BoxAtoms>
        </BoxAtoms>
        <BoxAtoms
          $flex={{ $justifyContent: 'flex-end', $alingItems: 'flex-end' }}
          $width={{ $width: 50 }}
        >
          <ButtonTouchableOpacityAton onPress={contextSignOut}>
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
  );
}
