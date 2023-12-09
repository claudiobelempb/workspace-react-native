import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const HeadingContainer = styled.Text<typeDefault>`
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
      : theme.fonts.size.l32px}px;
    text-align: ${props.textAlign ? props.textAlign : 'left'};
    font-family: ${theme.fonts.fontFamily.nunito.bold};
    font-weight: ${props.fontWeigh ? props.fontWeigh : '700'};

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
