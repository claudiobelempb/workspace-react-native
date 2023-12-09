import { ReactNode } from 'react';
import { ListRenderItem, TextInput, TouchableOpacity } from 'react-native';
import { FlexContainerValue, FlexValue } from './TypeFlex';
import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from './TypeFonts';
import { TypeMargin, TypeMarginValue } from './TypeMargin';
import { TypePadding, TypePaddingValue } from './TypePadding';
import { TypeTetxAlign, TypeText, TypeTextTransform } from './TypeText';
import { VariantObjValue } from './TypeVariant';

export type typeDefault = {
  onPress?: () => void;
  typeButton?:
    | 'children'
    | 'default'
    | 'dark'
    | 'light'
    | 'text'
    | 'icon'
    | 'point'
    | 'selected'
    | 'card-snack'
    | 'isSelected'
    | 'not-selected';
  typeIcon?:
    | 'default'
    | 'arrow-left'
    | 'arrow-up-right'
    | 'plus'
    | 'edit'
    | 'trash-2'
    | 'circle';
  typeInput?: 'default' | 'selected' | 'not-selected';
  //onTeamActive?: (value: string) => void;
  //onPlayerDelete?: (value: string) => void;
  inputRef?: React.RefObject<TextInput>;
  touchableOpacityRef?: React.RefObject<TouchableOpacity>;
  title?: string;
  name?: string;
  mensagem?: string;
  description?: string;
  titleButton?: string;
  titleText?: string;
  titleHeading?: string;
  children?: ReactNode;
  child?: number;
  variantBackgroud?: VariantObjValue;
  variantColor?: VariantObjValue;
  variantIconColor?: VariantObjValue;
  variantBorderColor?: VariantObjValue;
  variantBorderRadiusColor?: VariantObjValue;
  variantHouverColor?: VariantObjValue;
  variantPlaceholderColor?: VariantObjValue;
  variantActiveColor?: VariantObjValue;
  variantPointColor?: VariantObjValue;

  zIndex?: number;

  active?: {
    backgroud?: VariantObjValue;
    borderColor?: VariantObjValue;
    color?: VariantObjValue;
  };

  selected?: {
    backgroud?: VariantObjValue;
    borderColor?: VariantObjValue;
    color?: VariantObjValue;
  };

  /**FONTS */
  fontVariant?: VariantObjValue;
  fontFamily?: TypeFontFamily;
  fontStyle?: TypeFontStyle;
  fontLine?: TypeFontLineHeight;
  fontWeigh?: TypeFontWeigh;
  fontSize?: TypeFontSize;
  /**PADDING */
  padding?: TypePaddingValue;
  space?: {
    padding?: TypePadding;
    paddingTop?: TypePadding;
    paddingBottom?: TypePadding;
    paddingX?: TypePadding;
    paddingY?: TypePadding;
    margin?: TypeMargin;
    marginTop?: TypeMargin;
    marginBottom?: TypeMargin;
    marginX?: TypeMargin;
    marginY?: TypeMargin;
  };
  //padding?: TypePadding;
  paddingTop?: number;
  paddingRight?: number;
  paddingLeft?: number;
  paddingBottom?: number;
  paddingX?: number;
  paddingY?: number;

  /**MARGIN */
  margin?: TypeMarginValue;
  //margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginX?: number;
  marginY?: number;

  data?: ArrayLike<unknown> | null | undefined;
  renderItem?: ListRenderItem<unknown> | null | undefined;

  /**TEXTS */
  textLineThrough?: 'line-through';
  textTransform?: TypeTextTransform;
  textAlign?: TypeTetxAlign;

  position?: {
    position?: 'absolute' | 'relative';
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    zIndex?: number;
  };

  text?: TypeText;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  //value?: number;
  width?: number;
  isWidth?: boolean;
  maxWidth?: number;
  minWidth?: number;
  isHeight?: boolean;
  height?: number;
  maxHeight?: number;
  minHeight?: number;
  border?: number;
  radius?: {
    radius?: number;
    top?: {
      right: number;
      left: number;
    };
    bottom?: {
      right: number;
      left: number;
    };
  };

  isActive?: boolean;
  isIcon?: boolean;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  isBorder?: boolean;
  isSelected?: boolean;
  isBorderRadius?: boolean;

  /*Displa Flex Container */
  direction?: FlexContainerValue;
  justifyContent?: FlexContainerValue;
  alingItems?: FlexContainerValue;
  alingContent?: FlexContainerValue;
  wrap?: FlexValue;
  row?: FlexValue;
  colum?: FlexValue;

  /*Displa Flex Itemns */
  order?: number;
  alignSelf?: FlexContainerValue;
  grow?: number;
  shrink?: number;
  basis?: number;
  flex?: number;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
};
