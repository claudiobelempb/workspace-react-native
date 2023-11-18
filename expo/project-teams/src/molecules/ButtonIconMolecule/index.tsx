import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonIconMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton {...props} onPress={props.onPress}>
      <BoxTemplate
        direction='row'
        columnGap={10}
        alingItems='center'
        justifyContent='center'
        width={56}
        height={56}
      >
        {props.children}
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
