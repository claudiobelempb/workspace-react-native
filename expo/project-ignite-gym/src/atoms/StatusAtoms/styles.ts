import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledStatusText = styled.Text<typeDefault>`
  ${({ theme, ...props }) => css`
    ${props.$bg?.$background &&
    css`
      background-color: ${theme.color[props.$bg?.$background]};
    `}
    ${props.$color?.$color &&
    css`
      color: ${theme.color[props.$color?.$color]};
    `}
    ${props.$isActive
      ? css`
          background-color: ${props.$bg?.$background
            ? theme.color[props.$bg.$background]
            : theme.color.green_100};
        `
      : css`
          background-color: ${props.$bg?.$background
            ? theme.color[props.$bg.$background]
            : theme.color.red_100};
        `}
    border-radius: 50px;
    height: 14px;
    width: 14px;
  `}
`;
