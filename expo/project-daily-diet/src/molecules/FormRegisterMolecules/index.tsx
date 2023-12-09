import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TextAtom } from '@atoms/TextAtom';
import { TextInputAtom } from '@atoms/TextInputAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';

export function FormRegisterMolecules() {
  return (
    <ContentTemplate
      space={{ paddingY: 'm24px' }}
      position={{ position: 'absolute', bottom: -15 }}
      radius={{ top: { left: 20, right: 20 } }}
      variantBackgroud='gray_100'
      flex={1}
    >
      <BoxTemplate space={{ marginTop: 'l32px' }}>
        <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
          Nome
        </TextAtom>
        <TextInputAtom label='Hora' />
      </BoxTemplate>
      <BoxTemplate>
        <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
          Descrição
        </TextAtom>
        <TextInputAtom label='Hora' />
      </BoxTemplate>
      <BoxTemplate direction='row' columnGap={16}>
        <BoxTemplate flex={1}>
          <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
            Data
          </TextAtom>
          <TextInputAtom label='Hora' />
        </BoxTemplate>
        <BoxTemplate flex={1}>
          <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
            Hora
          </TextAtom>
          <TextInputAtom label='Hora' />
        </BoxTemplate>
      </BoxTemplate>
      <BoxTemplate>
        <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
          Está dentro da dieta?
        </TextAtom>
        <BoxTemplate direction='row' columnGap={10}>
          <ButtonTouchableOpacityAton
            flex={1}
            variantBackgroud='gray_200'
            minHeight={50}
          >
            <StatusAtoms variantBackgroud='green_700' isSelected />
            <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
              Sim
            </TextAtom>
          </ButtonTouchableOpacityAton>
          <ButtonTouchableOpacityAton
            flex={1}
            minHeight={50}
            variantBackgroud='gray_200'
          >
            <StatusAtoms variantBackgroud='red_700' isSelected={false} />
            <TextAtom fontSize='s14px' variantColor='gray_600' fontWeigh='700'>
              Não
            </TextAtom>
          </ButtonTouchableOpacityAton>
        </BoxTemplate>
      </BoxTemplate>
    </ContentTemplate>
  );
}
