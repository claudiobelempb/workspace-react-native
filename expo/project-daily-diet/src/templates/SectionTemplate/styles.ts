import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  ${({ theme, ...props }) => css`
    width: 100%;
    margin: 32px 0px;
  `}
`;
