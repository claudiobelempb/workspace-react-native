import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled.View<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    ${props.width &&
    css`
      width: ${props.width}px;
    `}
    ${props.height &&
    css`
      height: ${props.height}px;
    `}
    ${props.flex &&
    css`
      flex: ${props.flex && undefined};
    `}
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
    flex-direction: ${props.direction ? props.direction : 'column'};
    justify-content: ${props.justifyContent
      ? props.justifyContent
      : 'flex-start'};
    align-items: ${props.alingItems ? props.alingItems : 'flex-start'};
    align-content: ${props.alingContent ? props.alingContent : 'flex-start'};
    align-self: ${props.alignSelf ? props.alignSelf : 'flex-start'};
    flex-wrap: ${props.wrap ? props.wrap : 'nowrap'};
    ${props.padding &&
    css`
      gap: ${props.padding ? props.padding : 0}px;
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
    ${props.flex &&
    css`
      flex: ${props.flex ? props.flex : 0};
    `}
    ${props.isBorderRadius &&
    css`
      border-radius: 5px;
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
