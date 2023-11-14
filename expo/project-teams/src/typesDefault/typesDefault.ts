import { ReactNode } from 'react';
import { ListRenderItem } from 'react-native';
import { FlexContainerValue, FlexValue } from './TypeFlex';
import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from './TypeFonts';
import { TypeTetxAlign, TypeText, TypeTextTransform } from './TypeText';
import { VariantObjValue } from './TypeVariant';

export type typeDefault = {
  onPress?: () => void;
  title?: string;
  description?: string;
  titleButton?: string;
  titleText?: string;
  titleHeading?: string;
  children?: ReactNode;
  child?: number;
  variantBackgroud?: VariantObjValue;
  variantColor?: VariantObjValue;
  variantBorder?: VariantObjValue;
  variantPlaceholder?: VariantObjValue;
  /**FONTS */
  fontVariant?: VariantObjValue;
  fontFamily?: TypeFontFamily;
  fontStyle?: TypeFontStyle;
  fontLine?: TypeFontLineHeight;
  fontWeigh?: TypeFontWeigh;
  fontSize?: TypeFontSize;
  /**PADDING */
  padding?: number;

  /**MARGIN */
  nargin?: number;

  data?: ArrayLike<unknown> | null | undefined;
  renderItem?: ListRenderItem<unknown> | null | undefined;

  /**TEXTS */
  textLineThrough?: 'line-through';
  textTransform?: TypeTextTransform;
  textAlign?: TypeTetxAlign;

  text?: TypeText;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: number;
  width?: number;
  height?: number;
  isActive?: boolean;
  isIcon?: boolean;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  isBorder?: boolean;
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