import { IconAtom } from '@atoms/IconAtom';
import { ButtonIconTextMolecule } from '@molecules/ButtonIconTextMolecule';
import { typeDefault } from '@typesDefault/typesDefault';

export function CardGroupMolecule({ ...props }: typeDefault) {
  return (
    <ButtonIconTextMolecule
      minHeight={props.minHeight}
      padding={props.padding}
      isWidth={props.isWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      direction={props.direction}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      onPress={props.onPress}
      isActive={props.isActive}
      title={props.title}
    >
      <IconAtom icon='UsersThree' color='#00B37E' size={32} weight='fill' />
    </ButtonIconTextMolecule>
  );
}
