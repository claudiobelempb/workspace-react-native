import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { ImageProps } from 'react-native';

type Props = ImageProps & typeDefault;

export function ButtonImageTextMolecule({ ...props }: Props) {
  return (
    <ButtonTouchableOpacityAton
      {...props}
      onPress={() => console.log('Button')}
      height={54}
    >
      <BoxTemplate
        columnGap={10}
        direction='row'
        alingItems='center'
        justifyContent='center'
      >
        <ImageAtom {...props} />
        <TextAton variantBackgroud='white'>{props.title}</TextAton>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
