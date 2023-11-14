import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { ImageAtom } from '@atoms/ImageAton';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { ImageProps } from 'react-native';

type Props = ImageProps & typeDefault;

export function ButtonImageMolecule({ ...props }: Props) {
  return (
    <ButtonTouchableOpacityAton onPress={() => console.log('Button')}>
      <BoxTemplate
        columnGap={16}
        direction='row'
        variantBackgroud='gray_500'
        alingItems='center'
        height={96}
        padding={10}
        isBorderRadius
      >
        <ImageAtom {...props} />
        <TextAton variantBackgroud='white'>Nome da turma</TextAton>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
