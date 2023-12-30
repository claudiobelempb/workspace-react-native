import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAtoms } from '@atoms/TextAtoms';

type Category = {
  name: string;
  isActive: boolean;
  onPress: () => void;
};
export function CardCategoryMolecules({ name, isActive, onPress }: Category) {
  return (
    <BoxAtoms
      // $flex={{ $columnGap: 10 }}
      $space={{ $my: 's5' }}
      // $height={{ $maxHeight: 50 }}
      $width={{ $minWidth: 100 }}
    >
      <ButtonTouchableOpacityAton
        $height={{ $minHeight: 50 }}
        $bg={{ $background: 'gray_600' }}
        $border={{ $r: { width: 5 } }}
        $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
        // $isActive={!!item}
        // $space={{ $p: 's8' }}
        $overflow='hidden'
        $isActive={isActive}
        onPress={onPress}
      >
        <TextAtoms
          $text={{ $align: 'center', $transform: 'uppercase' }}
          $color={{ $color: isActive ? 'green_500' : 'gray_100' }}
        >
          {name}
        </TextAtoms>
      </ButtonTouchableOpacityAton>
    </BoxAtoms>
  );
}
