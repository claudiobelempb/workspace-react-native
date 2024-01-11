import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View<typeDefault>`
  ${({ theme, ...props }) => css`
    ${props.$flex?.$flex &&
    css`
      flex: 1;
    `}
    justify-content: center;
    align-items: center;
    ${props.$bg?.$background &&
    css`
      background-color: ${theme.color[props.$bg?.$background]};
    `};
  `}
`;

export const StyledLoading = styled.ActivityIndicator<typeDefault>`
  ${({ theme, ...props }) => css`
    ${props.$color?.$color &&
    css`
      color: ${theme.color[props.$color.$color]};
    `};
  `}
`;
