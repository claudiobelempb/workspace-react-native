export type TypePadding =
  | 's8px'
  | 's12px'
  | 'm16px'
  | 'm24px'
  | 'l32px'
  | 'x64px';

export type TypePaddingValue = {
  padding?: TypePadding;
  paddingX?: TypePadding;
  paddingY?: TypePadding;
};
