import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.TextInput`
  ${({ theme, ...props }) => css`
    height: 56px;
    background-color: ${theme.COLORS.GRAY_500};
    font-size: 16px;
    padding: 16px;
    border-radius: 5px;
    color: #ffffff;
  `}
`;
