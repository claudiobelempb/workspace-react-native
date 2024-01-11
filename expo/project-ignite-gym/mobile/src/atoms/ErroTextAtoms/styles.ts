import { typeDefault } from '@typesDefault/typesDefault';
import { Text, TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {} & TextProps & typeDefault;
export const Container = styled(Text)<Props>`
  ${({ theme, ...props }) => css`
    ${props.$validation?.$background &&
    css`
      background-color: ${theme.color[props.$validation.$background]};
    `}

    ${props.$validation?.$color &&
    css`
      color: ${theme.color[props.$validation.$color]};
    `}
    ${props.$inputOnFocus &&
    css`
      bordercolor: #c0c0c0;
    `}
    ${props.$inputOnBlur &&
    css`
      bordercolor: #4b6cd5;
    `}

    ${props.$isDisabled &&
    css`
      opacity: 0.6;
    `}

    ${props.$opacity &&
    css`
      opacity: ${props.$opacity};
    `}

    /*FONT */
    font-size: ${props.$validation?.$font?.$size
      ? theme.fonts.size[props.$validation?.$font.$size]
      : theme.fonts.size.m16}px;
    font-family: ${theme.fonts.fontFamily.roboto.regular};
    font-weight: ${props.$validation?.$font?.$weigh
      ? props.$validation?.$font.$weigh
      : '400'};

    /*TEXT */
    text-align: ${props.$text?.$align ? props.$text.$align : 'left'};
    ${props.$text?.$transform &&
    css`
      text-transform: ${props.$text?.$transform};
    `}

    /*POSITION */
    ${props.$position &&
    css`
      position: ${props.$position.position ? 'absolute' : 'relative'};
      top: ${props.$position.top ? props.$position.top : 0}px;
      left: ${props.$position.left ? props.$position.left : 0}px;
      right: ${props.$position.right ? props.$position.right : 0}px;
      top: ${props.$position.bottom ? props.$position.bottom : 0}px;
      z-index: ${props.$position.zIndex ? props.$position.zIndex : 0};
    `}

    /*Flex */
    ${props.$validation?.$flex?.$flex &&
    css`
      flex: ${props.$validation?.$flex?.$flex};
    `}
    ${props.$validation?.$flex?.$flexDirection &&
    css`
      flex-direction: ${props.$validation?.$flex?.$flexDirection};
    `}
    ${props.$validation?.$flex?.$justifyContent &&
    css`
      justify-content: ${props.$validation?.$flex?.$justifyContent};
    `}
    ${props.$validation?.$flex?.$alingItems &&
    css`
      align-items: ${props.$validation?.$flex?.$alingItems};
    `}
    ${props.$validation?.$flex?.$alingContent &&
    css`
      align-content: ${props.$validation?.$flex.$alingContent};
    `}
    ${props.$validation?.$flex?.$alignSelf &&
    css`
      align-self: ${props.$validation?.$flex.$alignSelf};
    `}
    ${props.$validation?.$flex?.$flexWrap &&
    css`
      flex-wrap: ${props.$validation?.$flex.$flexWrap};
    `}
    ${props.$validation?.$flex?.$gap &&
    css`
      gap: ${props.$validation?.$flex?.$gap}px;
    `}
    ${props.$validation?.$flex?.$rowGap &&
    css`
      gap: ${props.$validation?.$flex?.$rowGap}px;
    `}
    ${props.$validation?.$flex?.$columnGap &&
    css`
      gap: ${props.$flex?.$columnGap}px;
    `}
    ${props.$validation?.$flex?.$order &&
    css`
      order: ${props.$validation?.$flex?.$order};
    `}
    ${props.$validation?.$flex?.$grow &&
    css`
      flex-grow: ${props.$validation?.$flex?.$grow};
    `}
    ${props.$validation?.$flex?.$shrink &&
    css`
      flex-shrink: ${props.$validation?.$flex?.$shrink};
    `}
    ${props.$validation?.$flex?.$basis &&
    css`
      flex-basis: ${props.$validation?.$flex?.$basis}px;
    `}
    
    /*WIDTH */
    ${props.$validation?.$width?.$width &&
    css`
      width: ${props.$validation?.$width.$width}px;
    `}

    ${props.$validation?.$width?.$minWidth &&
    css`
      min-width: ${props.$validation?.$width?.$minWidth}px;
    `}
    ${props.$validation?.$width?.$maxWidth &&
    css`
      max-width: ${props.$validation?.$width?.$maxWidth}px;
    `}
   
    /*HEIGHT */
    /* height: calc(100% - 20px); */
    /* height: calc(100vh - 20px); */

    ${props.$validation?.$height?.$height &&
    css`
      height: ${props.$validation?.$height.$height}px;
    `}
    ${props.$validation?.$height?.$minHeight &&
    css`
      min-height: ${props.$validation?.$height?.$minHeight}px;
    `}
    ${props.$validation?.$height?.$maxHeight &&
    css`
      max-height: ${props.$validation?.$height?.$maxHeight}px;
    `}
    /*PADDING */
    ${props.$validation?.$space?.$p &&
    css`
      padding: ${props.$validation?.$space?.$p
        ? theme.space.p[props.$validation?.$space?.$p]
        : false}px;
    `}

    ${props.$validation?.$space?.$pt &&
    css`
      padding-top: ${theme.space.pt[props.$validation?.$space.$pt]}px;
    `}

    ${props.$validation?.$space?.$pb &&
    css`
      padding-bottom: ${theme.space.pb[props.$validation?.$space.$pb]}px;
    `}

    ${props.$validation?.$space?.$py &&
    css`
      padding: 0px ${theme.space.py[props.$validation?.$space.$py]}px;
    `}
    ${props.$validation?.$space?.$px &&
    css`
      padding: ${theme.space.px[props.$validation?.$space.$px]}px 0px;
    `}

    /*MARGIN */
    ${props.$validation?.$space?.$m &&
    css`
      margin: ${theme.space.m[props.$validation?.$space?.$m]}px;
    `}

    ${props.$validation?.$space?.$mt &&
    css`
      margin-top: ${theme.space.mt[props.$validation?.$space.$mt]}px;
    `}

    ${props.$validation?.$space?.$mb &&
    css`
      margin-bottom: ${theme.space.mb[props.$validation?.$space.$mb]}px;
    `}

    ${props.$validation?.$space?.$mx &&
    css`
      margin: ${props.$validation?.$space.$mx
          ? theme.space.mx[props.$validation?.$space.$mx]
          : 0}px
        0px;
    `}

    ${props.$validation?.$space?.$my &&
    css`
      margin: 0px
        ${props.$validation?.$space.$my
          ? theme.space.my[props.$validation?.$space.$my]
          : 0}px;
    `}

    ${props.$validation?.$border?.$border &&
    css`
      border-width: ${props.$validation?.$border?.$border.width}px;
      border-color: ${theme.color[
        props.$validation?.$border?.$border.color || 'transparent'
      ]};
      border-style: ${props.$validation?.$border?.$border.style};
    `}

    ${props.$validation?.$border?.$radius &&
    css`
      border-radius: ${props.$validation?.$border?.$radius.width}px;
    `}
  `}
`;
