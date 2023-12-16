import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { HeadingAton } from '@atoms/HeadingAtom';
import { TextAtom } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { ModalContainer } from './styles';

type ModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onAction?: () => void;
} & typeDefault;

export function ModalAtoms({ ...props }: ModalProps) {
  return (
    <ModalContainer
      isBorderRadius={props.isBorderRadius}
      alignSelf={props.alignSelf}
      alingItems={props.alingItems}
      alingContent={props.alingContent}
      justifyContent={props.justifyContent}
      rowGap={props.rowGap}
      columnGap={props.columnGap}
      minHeight={props.minHeight}
      direction={props.direction}
      flex={props.flex}
      space={props.space}
      position={props.position}
      animationType='fade'
      transparent={false}
      visible={props.modalVisible}
      isShadow
      isOpacity
    >
      <BoxTemplate
        alingItems='center'
        flex={1}
        justifyContent='center'
        space={{ padding: 'm16px' }}
        variantBackgroud='gray_100'
        isOpacity
      >
        <BoxTemplate
          minWidth={327}
          minHeight={192}
          justifyContent='center'
          alingItems='center'
          isBorderRadius
          variantBackgroud='red_100'
        >
          <BoxTemplate rowGap={10}>
            <HeadingAton
              variantColor='gray_700'
              fontSize='m20px'
              textAlign='center'
              space={{
                paddingY: 'l32px'
              }}
            >
              Deseja realmente excluir o registro da refeição?
            </HeadingAton>

            <BoxTemplate
              direction='row'
              justifyContent='space-between'
              space={{
                paddingY: 'l32px'
              }}
            >
              <ButtonTouchableOpacityAton
                onPress={() => props.setModalVisible(!props.modalVisible)}
                style={{ width: '48%' }}
                variantBackgroud='white'
                minHeight={50}
                isBorder
              >
                <TextAtom variantColor='gray_700'>Cancelar</TextAtom>
              </ButtonTouchableOpacityAton>

              <ButtonTouchableOpacityAton
                onPress={props.onAction}
                variantBackgroud='gray_700'
                minHeight={50}
              >
                <TextAtom variantColor='white'>Sim, excluir</TextAtom>
              </ButtonTouchableOpacityAton>
            </BoxTemplate>
          </BoxTemplate>
        </BoxTemplate>
      </BoxTemplate>
      {/* {props.children} */}
    </ModalContainer>
  );
}
