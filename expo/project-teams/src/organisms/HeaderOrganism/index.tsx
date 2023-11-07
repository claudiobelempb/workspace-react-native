import { ImageAtom } from '@atoms/ImageAton';
import { HeaderContainer } from './styles';

import BrandImage from '@assets/logo.png';

export function HeaderOrganism() {
  return (
    <HeaderContainer>
      <ImageAtom source={BrandImage} width={46} height={55} />
    </HeaderContainer>
  );
}
