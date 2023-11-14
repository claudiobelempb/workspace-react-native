import { ContentTemplate } from '@templates/ContentTemplate';
import { TextInputProps } from 'react-native';

import { typeDefault } from '@typesDefault/typesDefault';
import { StyledContainer } from './styles';

type Props = TextInputProps & typeDefault;

export function TextInputAtom({ ...props }: Props) {
  return (
    <ContentTemplate>
      <StyledContainer
        {...props}
        placeholderTextColor={props.variantPlaceholder}
      />
    </ContentTemplate>
  );
}
