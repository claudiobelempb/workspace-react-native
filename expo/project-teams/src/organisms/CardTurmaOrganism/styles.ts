import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.FlatList`
  ${({ theme, ...props }) => css`
    flex: 1;
    row-gap: 16px;
  `}
`;
