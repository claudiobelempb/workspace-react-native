import { typeDefault } from '@typesDefault/typesDefault';
import { TextInputProps } from 'react-native';

import styled, { css } from 'styled-components/native';

type Props = TextInputProps & typeDefault;

export const StyledContainer = styled.TextInput.attrs(
  ({ theme, ...props }) => ({
    placeholderTextColor: theme.variant.gray_300
  })
)<Props>`
  ${({ theme, ...props }) => css`
    width: 100%;
    padding-left: 16px;
    border-radius: 5px;
    ${props.width &&
    css`
      width: ${props.width}px;
    `}
    ${props.height &&
    css`
      height: ${props.height}px;
    `}
    height: 56px;
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
