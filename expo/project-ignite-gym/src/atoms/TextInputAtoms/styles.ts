import { typeDefault } from '@typesDefault/typesDefault';
import { TextInput, TextInputProps } from 'react-native';

import styled, { css } from 'styled-components/native';

type Props = TextInputProps & typeDefault;

export const Container = styled(TextInput)<Props>`
  ${({ theme, ...props }) => css`
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
    ${props.$bg?.$background &&
    css`
      background-color: ${theme.color[props.$bg?.$background]};
    `}

    ${props.$color?.$color &&
    css`
      color: ${theme.color[props.$color?.$color]};
    `}

    /*FONT */
    font-size: ${props.$font?.$size
      ? theme.fonts.size[props.$font.$size]
      : theme.fonts.size.m16}px;
    font-family: ${theme.fonts.fontFamily.roboto.regular};
    font-weight: ${props.$font?.$weigh ? props.$font.$weigh : '400'};

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
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex?.$flex};
    `}
    ${props.$flex?.$flexDirection &&
    css`
      flex-direction: ${props.$flex?.$flexDirection};
    `}
    ${props.$flex?.$justifyContent &&
    css`
      justify-content: ${props.$flex?.$justifyContent};
    `}
    ${props.$flex?.$alingItems &&
    css`
      align-items: ${props.$flex?.$alingItems};
    `}
    ${props.$flex?.$alingContent &&
    css`
      align-content: ${props.$flex.$alingContent};
    `}
    ${props.$flex?.$alignSelf &&
    css`
      align-self: ${props.$flex.$alignSelf};
    `}
    ${props.$flex?.$flexWrap &&
    css`
      flex-wrap: ${props.$flex.$flexWrap};
    `}
    ${props.$flex?.$gap &&
    css`
      gap: ${props.$flex?.$gap ? props.$flex?.$basis : 0}px;
    `}
    ${props.$flex?.$rowGap &&
    css`
      gap: ${props.$flex?.$rowGap ? props.$flex?.$rowGap : 0}px;
    `}
    ${props.$flex?.$columnGap &&
    css`
      gap: ${props.$flex?.$columnGap ? props.$flex?.$columnGap : 0}px;
    `}
    ${props.$flex?.$order &&
    css`
      order: ${props.$flex?.$order ? props.$flex?.$order : 0};
    `}
    ${props.$flex?.$grow &&
    css`
      flex-grow: ${props.$flex?.$grow ? props.$flex?.$grow : 0};
    `}
    ${props.$flex?.$shrink &&
    css`
      flex-shrink: ${props.$flex?.$shrink ? props.$flex?.$shrink : 0};
    `}
    ${props.$flex?.$basis &&
    css`
      flex-basis: ${props.$flex?.$basis ? props.$flex?.$basis : 0}px;
    `}
    
    /*WIDTH */
    ${props.$width?.$width &&
    css`
      width: ${props.$width.$width}px;
    `}

    ${props.$width?.$minWidth &&
    css`
      min-width: ${props.$width?.$minWidth}px;
    `}
    ${props.$width?.$maxWidth &&
    css`
      max-width: ${props.$width?.$maxWidth}px;
    `}
   
    /*HEIGHT */
    /* height: calc(100% - 20px); */
    /* height: calc(100vh - 20px); */

    ${props.$height?.$height &&
    css`
      height: ${props.$height.$height}px;
    `}
    ${props.$height?.$minHeight &&
    css`
      min-height: ${props.$height?.$minHeight}px;
    `}
    ${props.$height?.$maxHeight &&
    css`
      max-height: ${props.$height?.$maxHeight}px;
    `}
    /*PADDING */
    ${props.$space?.$p &&
    css`
      padding: ${props.$space?.$p ? theme.space.p[props.$space?.$p] : false}px;
    `}

    ${props.$space?.$pt &&
    css`
      padding-top: ${theme.space.pt[props.$space.$pt]}px;
    `}

    ${props.$space?.$pb &&
    css`
      padding-bottom: ${theme.space.pb[props.$space.$pb]}px;
    `}

    ${props.$space?.$py &&
    css`
      padding: 0px ${theme.space.py[props.$space.$py]}px;
    `}
    ${props.$space?.$px &&
    css`
      padding: ${props.$space.$px ? theme.space.px[props.$space.$px] : 0}px 0px;
    `}

    /*MARGIN */
    ${props.$space?.$m &&
    css`
      margin: ${props.$space?.$m ? theme.space.m[props.$space?.$m] : 0}px;
    `}

    ${props.$space?.$mt &&
    css`
      margin-top: ${theme.space.mt[props.$space.$mt]}px;
    `}

    ${props.$space?.$mb &&
    css`
      margin-bottom: ${theme.space.mb[props.$space.$mb]}px;
    `}

    ${props.$space?.$mx &&
    css`
      margin: ${props.$space.$mx ? theme.space.mx[props.$space.$mx] : 0}px 0px;
    `}

    ${props.$space?.$my &&
    css`
      margin: 0px ${props.$space.$my ? theme.space.my[props.$space.$my] : 0}px;
    `}

    ${props.$border?.$b &&
    css`
      border-width: ${props.$border?.$b.width}px;
      border-color: ${theme.color[props.$border?.$b.color || 'transparent']};
      border-style: ${props.$border?.$b.style};
    `}

    ${props.$border?.$r &&
    css`
      border-radius: ${props.$border?.$r.width}px;
    `}

    ${props.$inputValid?.$border?.$border &&
    css`
      border-width: ${props.$inputValid?.$border?.$border.width}px;
      border-color: ${theme.color[
        props.$inputValid?.$border.$border.color || 'transparent'
      ]};
      border-style: ${props.$inputValid?.$border.$border.style};
    `}
  `}
`;
