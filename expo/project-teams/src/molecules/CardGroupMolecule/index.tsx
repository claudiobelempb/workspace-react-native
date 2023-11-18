import { IconAtom } from '@atoms/IconAtom';
import { ButtonIconTextMolecule } from '@molecules/ButtonIconTextMolecule';
import { typeDefault } from '@typesDefault/typesDefault';

export function CardGroupMolecule({ ...props }: typeDefault) {
  return (
    <ButtonIconTextMolecule
      isBorderRadius
      variantBackgroud='gray_500'
      title={props.title}
      height={96}
    >
      <IconAtom icon='UsersThree' color='#00B37E' size={24} />
    </ButtonIconTextMolecule>
  );
}
