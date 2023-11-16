import { ButtonIconTextMolecule } from '@molecules/ButtonIconTextMolecule';
import { typeDefault } from '@typesDefault/typesDefault';

import { UsersThree } from 'phosphor-react-native';

export function CardGroupMolecule({ ...props }: typeDefault) {
  return (
    <ButtonIconTextMolecule
      isBorderRadius
      variantBackgroud='gray_500'
      title={props.title}
      height={96}
      alingItems='center'
      justifyContent='center'
    >
      <UsersThree color='#00B37E' size={24} weight='fill' />
    </ButtonIconTextMolecule>
  );
}
