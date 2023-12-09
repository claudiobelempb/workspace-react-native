import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledStatusText = styled.Text<typeDefault>`
  ${({ theme, ...props }) => css`
    ${props.isSelected
      ? css`
          background-color: ${props.variantBackgroud
            ? theme.variant[props.variantBackgroud]
            : theme.variant.green_100};
        `
      : css`
          background-color: ${props.variantBackgroud
            ? theme.variant[props.variantBackgroud]
            : theme.variant.red_100};
        `}
    border-radius: 50px;
    height: 14px;
    width: 14px;
  `}
`;
