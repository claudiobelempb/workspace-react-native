export type TypePadding =
  | 's5'
  | 's8'
  | 's10'
  | 's12'
  | 's14'
  | 'm16'
  | 'm18'
  | 'm24'
  | 'm20'
  | 'l30'
  | 'l32'
  | 'x60'
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
