export type TypePadding =
  | 's8px'
  | 's12px'
  | 's14px'
  | 'm16px'
  | 'm18px'
  | 'm24px'
  | 'l32px'
  | 'x64px';

export type TypePaddingValue = {
  p?: TypePadding;
  pt?: TypePadding;
  pr?: TypePadding;
  pl?: TypePadding;
  pb?: TypePadding;
  px?: TypePadding;
  py?: TypePadding;
  paddingX?: TypePadding;
  paddingY?: TypePadding;
};
