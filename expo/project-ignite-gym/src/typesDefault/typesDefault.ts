import { InputHTMLAttributes, ReactNode } from 'react';
import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from './TypeFonts';

import { FlattenSimpleInterpolation } from 'styled-components';
import { TypeBorderStyle } from './TypeBorder';
import { TypeColor } from './TypeColor';
import { FlexContainerValue, FlexValue } from './TypeFlex';
import { TypeSpace } from './TypeSpace';
import { TypeTetxAlign, TypeTextTransform } from './TypeText';

export type InpuType = typeDefault & InputHTMLAttributes<HTMLInputElement>;
export type InputRef = HTMLInputElement;
export type ButtonRef = HTMLButtonElement;

export type typeDefault = {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  $mensagem?: string;
  $description?: string;
  $titleButton?: string;
  $titleText?: string;
  $titleHeading?: string;
  children?: ReactNode;
  $child?: number;
  $circleAnimated?: () => void;
  $lines?: number;
  $spacings?: number;

  $variant?: 'solid' | 'outline';

  handleOnFocus?: () => FlattenSimpleInterpolation;

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
      $p?: TypeSpace;
      $pt?: TypeSpace;
      $pr?: TypeSpace;
      $pl?: TypeSpace;
      $pb?: TypeSpace;
      $px?: TypeSpace;
      $py?: TypeSpace;
      $m?: TypeSpace;
      $mt?: TypeSpace;
      $mr?: TypeSpace;
      $ml?: TypeSpace;
      $mb?: TypeSpace;
      $mx?: TypeSpace;
      $my?: TypeSpace;
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

  $inputValid?: {
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
      $p?: TypeSpace;
      $pt?: TypeSpace;
      $pr?: TypeSpace;
      $pl?: TypeSpace;
      $pb?: TypeSpace;
      $px?: TypeSpace;
      $py?: TypeSpace;
      $m?: TypeSpace;
      $mt?: TypeSpace;
      $mr?: TypeSpace;
      $ml?: TypeSpace;
      $mb?: TypeSpace;
      $mx?: TypeSpace;
      $my?: TypeSpace;
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

  $bg?: {
    $background?: TypeColor;
    $validation?: TypeColor;
    $hover?: TypeColor;
    $status?: TypeColor;
    $icon?: TypeColor;
    $placeholder?: TypeColor;
  };
  $color?: {
    $color?: TypeColor;
    $validation?: TypeColor;
    $hover?: TypeColor;
    $status?: TypeColor;
    $icon?: TypeColor;
    $border?: TypeColor;
    $placeholder?: TypeColor;
  };

  $table?: {
    $tr?: {
      $variant?: {
        $background?: TypeColor;
        $color?: TypeColor;
        $border?: TypeColor;
        $hover?: TypeColor;
      };
    };
    $td?: {
      $variant?: {
        $background?: TypeColor;
        $color?: TypeColor;
        $border?: TypeColor;
        $hover?: TypeColor;
      };
    };
    $th?: {
      $variant?: {
        $background?: TypeColor;
        $color?: TypeColor;
        $border?: TypeColor;
        $hover?: TypeColor;
      };
    };
    $thead?: {
      $variant?: {
        $background?: TypeColor;
        $color?: TypeColor;
        $border?: TypeColor;
        $hover?: TypeColor;
      };
    };
    $tfoot?: {
      $variant?: {
        $background?: TypeColor;
        $color?: TypeColor;
        $border?: TypeColor;
        $hover?: TypeColor;
      };
    };
    $tbody?: {
      $variant?: {
        $background?: TypeColor;
        $color?: TypeColor;
        $border?: TypeColor;
        $hover?: TypeColor;
      };
    };
  };

  /**FUNCTION */

  /**FONTS */
  $font?: {
    $color?: TypeColor;
    $family?: TypeFontFamily;
    $style?: TypeFontStyle;
    $line?: TypeFontLineHeight;
    $weigh?: TypeFontWeigh;
    $size?: TypeFontSize;
    $dinamic?: number;
  };
  /**SPACE */
  $space?: {
    $p?: TypeSpace;
    $pt?: TypeSpace;
    $pr?: TypeSpace;
    $pl?: TypeSpace;
    $pb?: TypeSpace;
    $px?: TypeSpace;
    $py?: TypeSpace;
    $m?: TypeSpace;
    $mt?: TypeSpace;
    $mr?: TypeSpace;
    $ml?: TypeSpace;
    $mb?: TypeSpace;
    $mx?: TypeSpace;
    $my?: TypeSpace;
  };

  $position?: {
    position?: 'absolute' | 'relative';
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    zIndex?: number;
  };

  $opacity?: number;
  $inputOnFocus?: boolean;
  $inputOnBlur?: boolean;
  /**TEXTS */

  $text?: {
    $through?: 'line-through';
    $transform?: TypeTextTransform;
    $align?: TypeTetxAlign;
  };
  $unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  //value?: number;
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
  $isWidth?: boolean;
  $isHeight?: boolean;
  $isHover?: boolean;
  $isBackgroundImg?: boolean;

  $isActive?: boolean;
  $isIcon?: boolean;
  $isIconLeft?: boolean;
  $isIconRight?: boolean;
  $isBorder?: boolean;
  $isBorderRadius?: boolean;
  $isDisabled?: boolean;

  $border?: {
    $b?: {
      style?: TypeBorderStyle;
      width?: number;
      color?: TypeColor;
    };
    $bt?: {
      style?: TypeBorderStyle;
      width?: number;
      color?: TypeColor;
    };
    $bl?: {
      style?: TypeBorderStyle;
      width?: number;
      color?: TypeColor;
    };
    $br?: {
      style?: TypeBorderStyle;
      width?: number;
      color?: TypeColor;
    };
    $bb?: {
      style?: TypeBorderStyle;
      width?: number;
      color?: TypeColor;
    };
    $r?: {
      width?: number;
    };
    $rtl?: {
      leftWidth?: number;
      rightWidth?: number;
    };
    $rtr?: {
      leftWidth?: number;
      rightWidth?: number;
    };
    $rbl?: {
      leftWidth?: number;
      rightWidth?: number;
    };
    $rbr?: {
      leftWidth?: number;
      rightWidth?: number;
    };
  };

  // OVERFLOW
  $overflow?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowX?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowY?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';

  $display?: 'flex';
  /*Displa Flex Container */
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
};
