import { typeDefault } from '@typesDefault/typesDefault';
import { Text, TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {} & TextProps & typeDefault;
export const StyledText = styled(Text)<Props>`
  ${({ theme, ...props }) => css`
    /* width: 100%; */
    position: relative;

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

    /*WIDTH */
    
    ${props.$width?.$width &&
    css`
      width: ${props.$width.$width}%;
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
    height: ${props.$height?.$height ? `${props.$height.$height}px` : `auto`};
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
      padding: 0px ${props.$space.$py}px;
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

    ${props.$isActive &&
    css`
      color: ${theme.color.green_500};
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
  `}
`;
