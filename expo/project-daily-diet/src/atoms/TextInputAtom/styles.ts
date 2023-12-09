import { typeDefault } from '@typesDefault/typesDefault';
import { TextInput, TextInputProps } from 'react-native';

import styled, { css } from 'styled-components/native';

type Props = TextInputProps & typeDefault;

export const TextInputAtomContainer = styled(TextInput)<Props>`
  ${({ theme, ...props }) => css`
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
        ${props.variantBorderColor
          ? theme.variant[props.variantBorderColor]
          : theme.variant.gray_700};
    `}

    ${props.isBorder &&
    css`
      border: 1px solid
        ${props.variantBorderColor
          ? theme.variant[props.variantBorderColor]
          : theme.variant.gray_700};
    `}
    /*PADDING */
    ${props.space?.padding &&
    css`
      padding: ${props.space?.padding
        ? theme.space.padding[props.space?.padding]
        : false}px;
    `}

    ${props.space?.paddingTop &&
    css`
      padding-top: ${theme.space.paddingTop[props.space.paddingTop]}px;
    `}

    ${props.space?.paddingBottom &&
    css`
      padding-bottom: ${theme.space.paddingBottom[props.space.paddingBottom]}px;
    `}

    ${props.paddingY &&
    css`
      padding: 0px ${props.paddingY}px;
    `}
    ${props.space?.paddingX &&
    css`
      padding: ${props.space.paddingX
          ? theme.space.paddingX[props.space.paddingX]
          : false}px
        0px;
    `}

    ${props.space?.paddingY &&
    css`
      padding: 0px
        ${props.space.paddingY
          ? theme.space.paddingY[props.space.paddingY]
          : false}px;
    `}

    /*MARGIN */
    ${props.space?.margin &&
    css`
      margin: ${props.space?.margin
        ? theme.space.margin[props.space?.margin]
        : false}px;
    `}

    ${props.space?.marginTop &&
    css`
      margin-top: ${theme.space.marginTop[props.space.marginTop]}px;
    `}

    ${props.space?.marginBottom &&
    css`
      margin-bottom: ${theme.space.marginBottom[props.space.marginBottom]}px;
    `}

    ${props.space?.marginX &&
    css`
      margin: ${props.space.marginX
          ? theme.space.marginX[props.space.marginX]
          : false}px
        0px;
    `}

    ${props.space?.marginY &&
    css`
      margin: 0px
        ${props.space.marginY
          ? theme.space.marginY[props.space.marginY]
          : false}px;
    `}
  `}
`;
