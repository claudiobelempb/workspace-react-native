import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.FlatList<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
  `}
`;
