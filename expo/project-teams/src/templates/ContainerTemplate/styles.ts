import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  ${({ theme, ...props }) => css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_700};
    padding: 32px;
  `}
`;
