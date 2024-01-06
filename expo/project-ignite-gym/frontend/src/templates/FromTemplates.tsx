import BackGroundImg from '@assets/background.png';
import BrandImg from '@assets/logo.svg';
import { BoxAtoms } from '@atoms/BoxAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { ReactNode } from 'react';
import { ScrollView } from 'react-native';
type Props = {
  children: ReactNode;
};
export function FormTemplates({ children }: Props) {
  return (
    <ContainerAtoms
      $flex={{ $flex: 1, $alingItems: 'center' }}
      $bg={{ $background: 'gray_700' }}
    >
      <ImageAtoms
        source={BackGroundImg}
        defaultSource={BackGroundImg}
        $position={{ position: 'absolute', bottom: 0 }}
        resizeMode='cover'
      />
      <ContentAtoms
        $flex={{ $flex: 1, $justifyContent: 'center', $alingItems: 'center' }}
        $space={{ $py: 'm24', $mt: 'x64' }}
      >
        <ScrollView
          style={{ flex: 1, width: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          <BoxAtoms $flex={{ $alingItems: 'center' }}>
            <BrandImg />
            <TextAtoms
              $color={{ $color: 'gray_100' }}
              $text={{ $align: 'center' }}
            >
              Treine sua mente e o seu corpo
            </TextAtoms>
          </BoxAtoms>
          {children}
        </ScrollView>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
