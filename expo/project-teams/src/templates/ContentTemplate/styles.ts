import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme, ...props }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
  `}
`;
