import BrandImage from '@assets/logo.png';
import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { IconAtom } from '@atoms/IconAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { useNavigation } from '@react-navigation/native';
import { ContentTemplate } from '@templates/ContentTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components/native';

export function HeaderOrganism({ ...props }: typeDefault) {
  const navigation = useNavigation();
  const { variant } = useTheme();

  function handleGoBack() {
    //navigation.goBack();
    navigation.navigate('home');
  }

  return (
    <ContentTemplate
      isWidth
      direction='row'
      justifyContent={props.isIcon ? 'space-between' : 'center'}
      alingItems='center'
      space={{ paddingX: 's12px' }}
    >
      {props.isIcon && (
        <ButtonTouchableOpacityAton
          width={32}
          height={32}
          variantIconColor='red_100'
          onPress={handleGoBack}
        >
          <IconAtom
            family='Feather'
            nameFeather='arrow-left'
            size={32}
            color={variant.white}
          />
        </ButtonTouchableOpacityAton>
      )}

      <ButtonTouchableOpacityAton onPress={handleGoBack} width={46} height={55}>
        <ImageAtom source={BrandImage} width={46} height={55} />
      </ButtonTouchableOpacityAton>
    </ContentTemplate>
  );
}
