import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  ${({ theme, ...props }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.variant.gray_700};
    border-radius: 5px;
  `}
`;
