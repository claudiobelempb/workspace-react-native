import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

export function ButtonIconMolecule({ ...props }: typeDefault) {
  return (
    <BoxTemplate
      width={32}
      height={55}
      alingItems='center'
      justifyContent='center'
    >
      <ButtonTouchableOpacityAton
        {...props}
        onPress={() => console.log('ButtonTouchableOpacityAton')}
      >
        <StyledContainer />
      </ButtonTouchableOpacityAton>
    </BoxTemplate>
  );
}
