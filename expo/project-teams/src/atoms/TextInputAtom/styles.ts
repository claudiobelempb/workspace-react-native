import { typeDefault } from '@typesDefault/typesDefault';
import { TextInput, TextInputProps } from 'react-native';

import styled, { css } from 'styled-components/native';

type Props = TextInputProps & typeDefault;

export const TextInputAtomContainer = styled(TextInput)<Props>`
  ${({ theme, ...props }) => css`
    flex-direction: ${props.direction ? props.direction : 'row'};
    justify-content: ${props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${props.alingContent ? props.alingItems : 'center'};
    align-self: ${props.alignSelf ? props.alignSelf : 'center'};
    padding: ${props.padding ? props.padding : 0}px;
    ${props.flex &&
    css`
      flex: ${props.flex};
    `}
    ${props.isBorderRadius &&
    css`
      border-radius: 6px;
    `}
    ${props.isWidth &&
    css`
      width: 100%;
    `}
    ${props.width &&
    css`
      width: ${props.width}px;
    `}
    ${props.minWidth &&
    css`
      min-width: ${props.minWidth}px;
    `}
    ${props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
    ${props.isHeight &&
    css`
      height: 100%;
    `}
    ${props.height &&
    css`
      height: ${props.height}px;
    `}
    ${props.minHeight &&
    css`
      min-height: ${props.minHeight}px;
    `}
    ${props.maxHeight &&
    css`
      max-height: ${props.maxHeight}px;
    `}
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
    color: ${props.variantColor
      ? theme.variant[props.variantColor]
      : theme.variant.transparent};

    ${props.isActive &&
    css`
      border: 1px solid
        ${props.variantBorder
          ? theme.variant[props.variantBorder]
          : theme.variant.green_500};
    `}
    /*PADDING */
    ${props.padding &&
    css`
      padding: ${props.padding}px;
    `}
    ${props.paddingTop &&
    css`
      padding-top: ${props.paddingTop}px;
    `}
    ${props.paddingRight &&
    css`
      padding-right: ${props.paddingRight}px;
    `}
    ${props.paddingLeft &&
    css`
      padding-left: ${props.paddingLeft}px;
    `}
    ${props.paddingBottom &&
    css`
      padding-bottom: ${props.paddingBottom}px;
    `}

    /*MARGIN */
    ${props.margin &&
    css`
      margin: ${props.margin}px;
    `}
    ${props.marginTop &&
    css`
      margin-top: ${props.marginTop}px;
    `}
    ${props.marginRight &&
    css`
      margin-right: ${props.marginRight}px;
    `}
    ${props.marginLeft &&
    css`
      margin-left: ${props.marginLeft}px;
    `}
    ${props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}px;
    `}
  `}
`;
