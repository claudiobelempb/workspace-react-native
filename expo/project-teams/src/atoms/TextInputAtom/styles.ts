import { typeDefault } from '@typesDefault/typesDefault';
import { TextInputProps } from 'react-native';

import styled, { css } from 'styled-components/native';

type Props = TextInputProps & typeDefault;

export const StyledContainer = styled.TextInput.attrs(
  ({ theme, ...props }) => ({
    placeholderTextColor: theme.variant.gray_300
  })
)<Props>`
  ${({ theme, ...props }) => css`
    flex-grow: 1;
    height: 56px;
    font-size: 16px;
    padding: 16px;
    border-radius: 5px;
    color: #ffffff;
  `}
`;
