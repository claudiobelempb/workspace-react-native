import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const HeadingContainer = styled.Text<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    color: ${props.variantColor
      ? theme.variant[props.variantColor]
      : theme.variant.white};
    font-size: ${props.fontSize
      ? theme.fonts.size[props.fontSize]
      : theme.fonts.size.l24}px;
    text-align: ${props.textAlign ? props.textAlign : 'left'};
    font-family: ${theme.fonts.fontFamily.roboto.bold};
  `}
`;
