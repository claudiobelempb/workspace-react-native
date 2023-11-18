import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonTextMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton {...props} marginRight={10}>
      <BoxTemplate
        alingItems='center'
        justifyContent='center'
        direction='row'
        height={56}
      >
        <TextAton {...props}>{props.title}</TextAton>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
