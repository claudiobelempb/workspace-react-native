import { ButtonIconTextMolecule } from '@molecules/ButtonIconTextMolecule';
import { typeDefault } from '@typesDefault/typesDefault';

export default function CardGroupMolecule({ ...props }: typeDefault) {
  return (
    <ButtonIconTextMolecule
      minHeight={props.minHeight}
      padding={props.padding}
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      isWidth={props.isWidth}
      isBorderRadius={props.isBorderRadius}
      variantBackgroud={props.variantBackgroud}
      direction={props.direction}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      flex={props.flex}
      onPress={props.onPress}
      isActive={props.isActive}
      title={props.title}
      marginBottom={props.marginBottom}
    >
      {props.children}
    </ButtonIconTextMolecule>
  );
}
