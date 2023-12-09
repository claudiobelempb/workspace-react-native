import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.Image<typeDefault>`
  ${({ theme, ...props }) => css`
    ${props.width &&
    css`
      width: ${props.width}px;
    `}
    ${props.height &&
    css`
      height: ${props.height}px;
    `}
    ${props.isBorderRadius &&
    css`
      border-radius: 50px;
      border-width: 2px;
      border-color: ${theme.variant.gray_700};
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
