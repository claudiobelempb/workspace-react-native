import { typeDefault } from '@typesDefault/typesDefault';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledContainer = styled(Image)<typeDefault>`
  ${({ theme, ...props }) => css`
    /* width: 100%; */

    ${props.$bg?.$background &&
    css`
      background-color: ${theme.color[props.$bg?.$background]};
    `}
    ${props.$color?.$color &&
    css`
      color: ${theme.color[props.$color?.$color]};
    `}

    /*POSITION */
    ${props.$position &&
    css`
      position: ${props.$position.position};
      top: ${props.$position.top}px;
      left: ${props.$position.left}px;
      right: ${props.$position.right}px;
      top: ${props.$position.bottom}px;
      /* z-index: ${props.$position.zIndex}; */
      flex: 1;
      /* height: 100%; */
      /* width: 100vw; */
      justify-content: flex-start;
      align-items: flex-end;
      align-self: flex-end;
    `}
    /*Flex */
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex.$flex};
    `}
    ${props.$flex?.$flexDirection &&
    css`
      flex-direction: ${props.$flex?.$flexDirection};
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
      width: ${props.$width?.$width}px;
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

    /*BORDER */
    ${props.$border?.$b &&
    css`
      border-width: ${props.$border?.$b.width}px;
      border-color: ${theme.color[props.$border.$b.color || 'gray_700']};
    `}
    /*BORDER RADIUS  */
    ${props.$border?.$r &&
    css`
      border-radius: ${props.$border?.$r.width}px;
    `}
  `}
`;
