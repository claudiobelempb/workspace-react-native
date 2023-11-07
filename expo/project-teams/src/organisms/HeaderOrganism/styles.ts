import styled, { css } from 'styled-components/native';

export const HeaderContainer = styled.View`
  ${({ theme, ...props }) => css`
    align-items: center;
  `}
`;
