import { TypeBorderStyle } from '@typesDefault/TypeBorder';
import { TypeColor } from '@typesDefault/TypeColor';
import { FlexContainerValue, FlexValue } from '@typesDefault/TypeFlex';
import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from '@typesDefault/TypeFonts';
import { css } from 'styled-components/native';
type Props = {
  $validation?: {
    $message?: string;
    $valid?: boolean;
    $color?: TypeColor;
    $background?: TypeColor;
    $font?: {
      $color?: TypeColor;
      $family?: TypeFontFamily;
      $style?: TypeFontStyle;
      $line?: TypeFontLineHeight;
      $weigh?: TypeFontWeigh;
      $size?: TypeFontSize;
      $dinamic?: number;
    };
    $width?: {
      $width?: number;
      $maxWidth?: number;
      $minWidth?: number;
      $widthDinamic?: number;
    };
    $height?: {
      $height?: number;
      $maxHeight?: number;
      $minHeight?: number;
      $heightDinamic?: number;
    };
    $flex?: {
      $flexDirection?: FlexContainerValue;
      $justifyContent?: FlexContainerValue;
      $alingItems?: FlexContainerValue;
      $alingContent?: FlexContainerValue;
      $flexWrap?: FlexValue;
      $row?: FlexValue;
      $colum?: FlexValue;
      /*Displa Flex Itemns */
      $order?: number;
      $alignSelf?: FlexContainerValue;
      $grow?: number;
      $shrink?: number;
      $basis?: number;
      $flex?: number;
      $gap?: number;
      $rowGap?: number;
      $columnGap?: number;
    };
    $space?: {
      $p?: number;
      $pt?: number;
      $pr?: number;
      $pl?: number;
      $pb?: number;
      $px?: number;
      $py?: number;
      $m?: number;
      $mt?: number;
      $mr?: number;
      $ml?: number;
      $mb?: number;
      $mx?: number;
      $my?: number;
    };
    $border?: {
      $border?: {
        style?: TypeBorderStyle;
        width?: number;
        color?: TypeColor;
      };
      $top?: {
        style?: TypeBorderStyle;
        width?: number;
        color?: TypeColor;
      };
      $left?: {
        style?: TypeBorderStyle;
        width?: number;
        color?: TypeColor;
      };
      $right?: {
        style?: TypeBorderStyle;
        width?: number;
        color?: TypeColor;
      };
      $bottom?: {
        style?: TypeBorderStyle;
        width?: number;
        color?: TypeColor;
      };
      $radius?: {
        width?: number;
      };
      $radiusTop?: {
        leftWidth?: number;
        rightWidth?: number;
      };
      $radiusLeft?: {
        leftWidth?: number;
        rightWidth?: number;
      };
      $radiusRight?: {
        leftWidth?: number;
        rightWidth?: number;
      };
      $radiusBottom?: {
        leftWidth?: number;
        rightWidth?: number;
      };
    };
  };
};

export const handleValidation = ({ $validation }: Props) => css`
  ${({ theme, ...props }) => css<Props>`
    ${$validation?.$background &&
    css`
      background-color: ${theme.color[$validation.$background]};
    `}

    ${$validation?.$color &&
    css`
      color: ${theme.color[$validation.$color]};
    `}
    /*FONT */
    font-size: ${$validation?.$font?.$size
      ? theme.fonts.size[$validation?.$font.$size]
      : theme.fonts.size.m16}px;
    font-family: ${theme.fonts.fontFamily.roboto.regular};
    font-weight: ${$validation?.$font?.$weigh
      ? $validation?.$font.$weigh
      : '400'};

    /*Flex */
    ${$validation?.$flex?.$flex &&
    css`
      flex: ${$validation?.$flex?.$flex};
    `}
    ${$validation?.$flex?.$flexDirection &&
    css`
      flex-direction: ${$validation?.$flex?.$flexDirection};
    `}
    ${$validation?.$flex?.$justifyContent &&
    css`
      justify-content: ${$validation?.$flex?.$justifyContent};
    `}
    ${$validation?.$flex?.$alingItems &&
    css`
      align-items: ${$validation?.$flex?.$alingItems};
    `}
    ${$validation?.$flex?.$alingContent &&
    css`
      align-content: ${$validation?.$flex.$alingContent};
    `}
    ${$validation?.$flex?.$alignSelf &&
    css`
      align-self: ${$validation?.$flex.$alignSelf};
    `}
    ${$validation?.$flex?.$flexWrap &&
    css`
      flex-wrap: ${$validation?.$flex.$flexWrap};
    `}
    ${$validation?.$flex?.$gap &&
    css`
      gap: ${$validation?.$flex?.$gap}px;
    `}
    ${$validation?.$flex?.$rowGap &&
    css`
      gap: ${$validation?.$flex?.$rowGap}px;
    `}
    ${$validation?.$flex?.$columnGap &&
    css`
      gap: ${$validation.$flex?.$columnGap}px;
    `}
    ${$validation?.$flex?.$order &&
    css`
      order: ${$validation?.$flex?.$order};
    `}
    ${$validation?.$flex?.$grow &&
    css`
      flex-grow: ${$validation?.$flex?.$grow};
    `}
    ${$validation?.$flex?.$shrink &&
    css`
      flex-shrink: ${$validation?.$flex?.$shrink};
    `}
    ${$validation?.$flex?.$basis &&
    css`
      flex-basis: ${$validation?.$flex?.$basis}px;
    `}
    
    /*WIDTH */
    ${$validation?.$width?.$width &&
    css`
      width: ${$validation?.$width.$width}px;
    `}

    ${$validation?.$width?.$minWidth &&
    css`
      min-width: ${$validation?.$width?.$minWidth}px;
    `}
    ${$validation?.$width?.$maxWidth &&
    css`
      max-width: ${$validation?.$width?.$maxWidth}px;
    `}
   
    /*HEIGHT */
    /* height: calc(100% - 20px); */
    /* height: calc(100vh - 20px); */

    ${$validation?.$height?.$height &&
    css`
      height: ${$validation?.$height.$height}px;
    `}
    ${$validation?.$height?.$minHeight &&
    css`
      min-height: ${$validation?.$height?.$minHeight}px;
    `}
    ${$validation?.$height?.$maxHeight &&
    css`
      max-height: ${$validation?.$height?.$maxHeight}px;
    `}
  

    ${$validation?.$border?.$border &&
    css`
      border-width: ${$validation?.$border?.$border.width}px;
      border-color: ${theme.color[
        $validation?.$border?.$border.color || 'transparent'
      ]};
      border-style: ${$validation?.$border?.$border.style};
    `}

    ${$validation?.$border?.$radius &&
    css`
      border-radius: ${$validation?.$border?.$radius.width}px;
    `}
  `}
`;
