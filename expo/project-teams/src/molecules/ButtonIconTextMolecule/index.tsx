import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function ButtonIconTextMolecule({ ...props }: typeDefault) {
  return (
    <ButtonTouchableOpacityAton
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
    >
      <BoxTemplate
        minHeight={96}
        columnGap={10}
        direction='row'
        alingItems='center'
        padding={10}
        variantBackgroud='gray_500'
        isWidth
        isBorderRadius
        onPress={() => console.log('ButtonTouchableOpacityAton')}
      >
        {props.children}
        <TextAtom variantColor='white'>{props.title}</TextAtom>
      </BoxTemplate>
    </ButtonTouchableOpacityAton>
  );
}
