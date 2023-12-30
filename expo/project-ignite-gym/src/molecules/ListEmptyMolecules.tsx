import { BoxAtoms } from '@atoms/BoxAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { typeDefault } from '@typesDefault/typesDefault';

export function ListEmptyMolecules({ ...props }: typeDefault) {
  return (
    <BoxAtoms>
      <TextAtoms {...props}>{props.$mensagem}</TextAtoms>
    </BoxAtoms>
  );
}
