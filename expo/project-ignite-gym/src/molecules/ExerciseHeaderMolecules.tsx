import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtoms } from '@atoms/IconAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function ExerciseHeaderMolecules() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoScreen() {
    navigation.goBack();
  }
  return (
    <ContentAtoms
      $bg={{ $background: 'gray_500' }}
      $space={{ $py: 'm24', $mx: 'm24' }}
    >
      <BoxAtoms
        $width={{ $maxWidth: 46 }}
        $height={{ $maxHeight: 56 }}
        $flex={{ $justifyContent: 'center' }}
        $space={{ $mb: 's10' }}
      >
        <ButtonTouchableOpacityAton onPress={handleGoScreen}>
          <IconAtoms
            name='arrow-left'
            $space={{ $p: 's5' }}
            $width={{ $maxWidth: 46 }}
            $height={{ $maxHeight: 56 }}
            $font={{ $size: 'm24' }}
            $color={{ $color: 'green_500' }}
          />
        </ButtonTouchableOpacityAton>
      </BoxAtoms>
      <BoxAtoms $flex={{ $flexDirection: 'row', $alingItems: 'center' }}>
        <BoxAtoms $width={{ $width: 50 }}>
          <HeadingAtoms $color={{ $color: 'gray_100' }}>
            Puxada frontal
          </HeadingAtoms>
        </BoxAtoms>
        <BoxAtoms
          $width={{ $width: 50 }}
          $flex={{
            $flexDirection: 'row',
            $alingItems: 'center',
            $justifyContent: 'flex-end'
          }}
        >
          <IconAtoms
            $space={{ $p: 's5' }}
            // $width={{ $maxWidth: 56 }}
            $height={{ $maxHeight: 56 }}
            // $bg={{ $background: 'red_700' }}
            $color={{ $color: 'green_500' }}
            $font={{ $size: 'm24' }}
            name='check'
            // $flex={{ $justifyContent: 'flex-end' }}
          />
          <TextAtoms
            $color={{ $color: 'gray_100' }}
            $text={{ $align: 'right' }}
            // $bg={{ $background: 'green_700' }}
          >
            Costas
          </TextAtoms>
        </BoxAtoms>
      </BoxAtoms>
    </ContentAtoms>
  );
}
