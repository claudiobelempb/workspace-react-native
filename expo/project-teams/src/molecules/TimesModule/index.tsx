import { ButtonTouchableOpacityAton } from '@atoms/ButtonTouchableOpacityAtom';
import { TextAton } from '@atoms/TextAtom';
import { BoxTemplate } from '@templates/BoxTemplate';
import { ContentTemplate } from '@templates/ContentTemplate';

export function TimesModule() {
  return (
    <ContentTemplate>
      <BoxTemplate>
        <ButtonTouchableOpacityAton
          title='TIME A'
          onPress={() => console.log('Times')}
          isActive
        />
        <ButtonTouchableOpacityAton
          title='TIME B'
          onPress={() => console.log('Times')}
        />
      </BoxTemplate>
      <BoxTemplate>
        <TextAton variantColor='white'>2</TextAton>
      </BoxTemplate>
    </ContentTemplate>
  );
}
