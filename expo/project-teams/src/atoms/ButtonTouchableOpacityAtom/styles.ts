import { typeDefault } from '@typesDefault/typesDefault';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = TouchableOpacityProps & typeDefault;

export const TouchableOpacityContainer = styled(TouchableOpacity)<Props>`
  ${({ theme, ...props }) => css`
    width: 100%;
    flex: 1;
    flex-direction: ${props.direction ? props.direction : 'row'};
    justify-content: ${props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${props.alingContent ? props.alingItems : 'center'};
    align-self: ${props.alignSelf ? props.alignSelf : 'center'};
    min-height: ${props.minHeight ? props.minHeight : 56}px;
    max-height: ${props.maxHeight ? props.maxHeight : 56}px;
    padding: ${props.padding ? props.padding : 0}px;
    border-radius: ${props.radius ? props.radius : 6}px;
    ${props.width &&
    css`
      width: ${props.width}px;
    `}
    ${props.height &&
    css`
      height: ${props.height}px;
    `}
    background-color: ${props.variantBackgroud
      ? theme.variant[props.variantBackgroud]
      : theme.variant.transparent};
    border-radius: 6px;
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
