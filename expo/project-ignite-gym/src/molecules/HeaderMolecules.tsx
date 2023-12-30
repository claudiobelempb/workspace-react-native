import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';

type Props = {
  title: string;
};

export const HeaderMolecules = ({ title }: Props) => {
  return (
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
          {title}
        </HeadingAtoms>
      </BoxAtoms>
    </ContentAtoms>
  );
};
