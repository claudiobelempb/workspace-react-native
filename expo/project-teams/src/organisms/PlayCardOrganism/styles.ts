import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View`
  ${({ theme, ...props }) => css`
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    border-radius: 5px;
  `}
`;

export const StyledContent = styled.View<typeDefault>`
  ${({ theme, ...props }) => css`
    flex-direction: row;
    font-size: 16px;
    column-gap: 16px;
  `}
`;
