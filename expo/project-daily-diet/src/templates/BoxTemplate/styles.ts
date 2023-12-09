import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View<typeDefault>`
  ${({ theme, ...props }) => css`
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
    color: ${props.variantColor
      ? theme.variant[props.variantColor]
      : theme.variant.transparent};
    ${props.position &&
    css`
      position: ${props.position.position ? 'absolute' : 'relative'};
      top: ${props.position.top ? props.position.top : 0}px;
      left: ${props.position.left ? props.position.left : 0}px;
      right: ${props.position.right ? props.position.right : 0}px;
      top: ${props.position.bottom ? props.position.bottom : 0}px;
      z-index: ${props.position.zIndex ? props.position.zIndex : 0};
    `}
    position: relative;

    /*Flex */
    ${props.flex &&
    css`
      flex: ${props.flex};
    `}
    ${props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
    ${props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
    ${props.alingItems &&
    css`
      align-items: ${props.alingItems};
    `}
    ${props.alingContent &&
    css`
      align-content: ${props.alingContent};
    `}
    ${props.alignSelf &&
    css`
      align-self: ${props.alignSelf};
    `}
    ${props.wrap &&
    css`
      flex-wrap: ${props.wrap};
    `}
    ${props.gap &&
    css`
      gap: ${props.gap ? props.basis : 0}px;
    `}
    ${props.rowGap &&
    css`
      gap: ${props.rowGap ? props.rowGap : 0}px;
    `}
    ${props.columnGap &&
    css`
      gap: ${props.columnGap ? props.columnGap : 0}px;
    `}
    ${props.order &&
    css`
      order: ${props.order ? props.order : 0};
    `}
    ${props.grow &&
    css`
      flex-grow: ${props.grow ? props.grow : 0};
    `}
    ${props.shrink &&
    css`
      flex-shrink: ${props.shrink ? props.shrink : 0};
    `}
    ${props.basis &&
    css`
      flex-basis: ${props.basis ? props.basis : 0}px;
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
     
      ${props.isBorderRadius &&
    css`
      border-radius: 5px;
    `}
      /*PADDING */
     ${props.space?.padding &&
    css`
      padding: ${theme.space.padding[props.space?.padding]}px;
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

export const StyledContent = styled.View<typeDefault>`
  //width: 100%;
  //background-color: red;
`;
