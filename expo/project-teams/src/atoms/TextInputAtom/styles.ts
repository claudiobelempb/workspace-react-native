import { typeDefault } from '@typesDefault/typesDefault';
import { TextInput, TextInputProps } from 'react-native';

import styled, { css } from 'styled-components/native';

type Props = TextInputProps & typeDefault;

export const StyledContainer = styled(TextInput)<Props>`
  ${({ theme, ...props }) => css`
    flex: 1;
    flex-direction: ${props.direction ? props.direction : 'row'};
    min-height: ${props.minHeight ? props.minHeight : 56}px;
    max-height: ${props.maxHeight ? props.maxHeight : 56}px;
    padding: ${props.padding ? props.padding : 16}px;
    border-radius: ${props.radius ? props.radius : 6}px;
    ${props.width &&
    css`
      width: ${props.width}px;
    `}
    ${props.height &&
    css`
      height: ${props.height}px;
    `}
    color: ${props.variantColor
      ? theme.variant[props.variantColor]
      : theme.variant.white};
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.white};
    font-size: ${props.fontSize
      ? theme.fonts.size[props.fontSize]
      : theme.fonts.size.m16}px;
    font-weight: ${props.fontWeigh ? props.fontWeigh : '400'};
    text-align: ${props.textAlign ? props.textAlign : 'left'};
  `}
`;
