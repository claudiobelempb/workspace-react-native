import { typeDefault } from '@typesDefault/typesDefault';
import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled(FlatList)<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
  `}
`;
