import { TextAton } from '@atoms/TextAtom';
import { ButtonTextMolecule } from '@molecules/ButtonTextMolecule';
import { BoxTemplate } from '@templates/BoxTemplate';

export function TimesModule() {
  return (
    <BoxTemplate direction='row' alingItems='center'>
      <BoxTemplate flex={5} direction='row' columnGap={10}>
        <ButtonTextMolecule
          variantBackgroud='transparent'
          width={70}
          onPress={() => console.log('Times')}
          isActive
        >
          TIME A
        </ButtonTextMolecule>
        <ButtonTextMolecule
          fontSize={'s14'}
          width={70}
          onPress={() => console.log('Times')}
          direction='row'
        >
          TIME B
        </ButtonTextMolecule>
      </BoxTemplate>
      <BoxTemplate
        direction='row'
        flex={1}
        height={56}
        alingItems='center'
        justifyContent='center'
        padding={10}
      >
        <TextAton fontSize='s14' textAlign='right' variantColor='white'>
          2
        </TextAton>
      </BoxTemplate>
    </BoxTemplate>
  );
}
