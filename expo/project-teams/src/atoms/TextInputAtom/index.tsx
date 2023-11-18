import { TextInputProps } from 'react-native';

import { BoxTemplate } from '@templates/BoxTemplate';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components/native';
import { StyledContainer } from './styles';

type Props = TextInputProps & typeDefault;

export function TextInputAtom({ ...props }: Props) {
  const { variant } = useTheme();

  return (
    <BoxTemplate direction='row'>
      <StyledContainer {...props} placeholderTextColor={variant.gray_300} />
    </BoxTemplate>
  );
}
