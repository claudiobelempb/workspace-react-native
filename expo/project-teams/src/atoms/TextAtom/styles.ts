import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledText = styled.Text<typeDefault>`
  ${({ theme, ...props }) => css`
    ${props.isWidth &&
    css`
      width: 100%;
    `}
    ${props.isHeight &&
    css`
      height: 100%;
    `}
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
    color: ${props.variantColor
      ? theme.variant[props.variantColor]
      : theme.variant.white};
    font-size: ${props.fontSize
      ? theme.fonts.size[props.fontSize]
      : theme.fonts.size.m16px}px;
    text-align: ${props.textAlign ? props.textAlign : 'left'};
    font-family: ${theme.fonts.fontFamily.roboto.regular};
    font-weight: ${props.fontWeigh ? props.fontWeigh : '400'};
    ${props.textTransform &&
    css`
      text-transform: ${props.textTransform};
    `}
  `}
`;
