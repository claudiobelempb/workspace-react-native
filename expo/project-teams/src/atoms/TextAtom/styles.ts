import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledText = styled.Text<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    color: ${props.variantColor
      ? theme.variant[props.variantColor]
      : theme.variant.white};
    font-size: ${props.fontSize
      ? theme.fonts.size[props.fontSize]
      : theme.fonts.size.m16}px;
    font-weight: ${props.fontWeigh ? props.fontWeigh : '400'};
    text-align: ${props.textAlign ? props.textAlign : 'left'};
  `}
`;
