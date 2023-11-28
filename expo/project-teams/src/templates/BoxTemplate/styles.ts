import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View<typeDefault>`
  ${({ theme, ...props }) => css`
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
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
      padding: ${props.space?.padding
        ? theme.space.padding[props.space?.padding]
        : false}px;
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
    ${props.paddingX &&
    css`
      padding: ${props.paddingX ? props.paddingX : 20}px 0px;
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

    ${props.padding?.p &&
    css`
      padding: ${theme.padding.p[props.padding.p]}px;
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
    `};
  `}
`;

export const StyledContent = styled.View<typeDefault>`
  //width: 100%;
  //background-color: red;
`;
