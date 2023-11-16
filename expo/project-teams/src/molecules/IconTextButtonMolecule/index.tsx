import { TextAton } from '@atoms/TextAtom';
import { User, X } from 'phosphor-react-native';

import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';

export function IconTextButtonMolecule({ ...props }: typeDefault) {
  return (
    <BoxTemplate
      variantBackgroud='gray_400'
      alingItems='center'
      direction='row'
      isBorderRadius
      padding={10}
    >
      <BoxTemplate
        height={40}
        flex={12}
        alingItems='center'
        direction='row'
        columnGap={10}
      >
        <User size={24} color='#FFFFFF' {...props} />
        <TextAton variantColor='white'>{props.title}</TextAton>
      </BoxTemplate>
      <BoxTemplate
        height={40}
        flex={1}
        alingItems='center'
        justifyContent='center'
      >
        <ButtonTouchableOpacityAton
          title=''
          onPress={() => console.log('IconTextButton')}
        >
          <X size={24} color='#CC2937' />
        </ButtonTouchableOpacityAton>
      </BoxTemplate>
    </BoxTemplate>
  );
}
