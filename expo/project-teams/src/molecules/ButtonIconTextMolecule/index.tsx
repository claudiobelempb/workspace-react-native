import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonIconTextMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton
      {...props}
      onPress={() => console.log('ButtonIconTextMolecule')}
    >
      <BoxTemplate
        height={96}
        columnGap={10}
        direction='row'
        alingItems='center'
        padding={10}
      >
        {props.children}
        <TextAton variantBackgroud='white'>{props.title}</TextAton>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
