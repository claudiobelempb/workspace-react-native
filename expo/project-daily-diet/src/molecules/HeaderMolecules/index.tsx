import { ImageAtom } from '@atoms/ImageAton';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';

import BrandImg from '@assets/brand.png';
import ProfileImg from '@assets/profile.png';

export function HeaderMolecules() {
  return (
    <ContentTemplate
      direction='row'
      justifyContent='space-between'
      space={{ marginX: 'm16px' }}
    >
      <BoxTemplate>
        <ImageAtom source={BrandImg} width={82} height={37} />
      </BoxTemplate>
      <BoxTemplate>
        <ImageAtom source={ProfileImg} width={40} height={40} isBorderRadius />
      </BoxTemplate>
    </ContentTemplate>
  );
}
