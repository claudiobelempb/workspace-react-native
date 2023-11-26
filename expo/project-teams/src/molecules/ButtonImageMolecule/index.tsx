import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { ImageProps } from 'react-native';

type Props = ImageProps & typeDefault;

export function ButtonImageMolecule({ ...props }: Props) {
  return (
    <ButtonTouchableOpacityAton
      {...props}
      onPress={() => console.log('ButtonImageMolecule')}
      alingItems='center'
      justifyContent='center'
    >
      <BoxTemplate
        direction='row'
        columnGap={10}
        alingItems='center'
        isBorderRadius
      >
        <ImageAtom width={32} height={32} {...props} />
        <TextAtom>{props.title}</TextAtom>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
