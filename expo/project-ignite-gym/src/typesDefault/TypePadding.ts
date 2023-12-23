export type TypePadding =
  | 's8'
  | 's12'
  | 's14'
  | 'm16'
  | 'm18'
  | 'm24'
  | 'l32'
  | 'x64';

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
