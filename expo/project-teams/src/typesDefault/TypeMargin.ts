export type TypeMargin =
  | 's8px'
  | 's12px'
  | 'm16px'
  | 'm24px'
  | 'l32px'
  | 'x64px';

export type TypeMarginValue = {
  m?: TypeMargin;
  mt?: TypeMargin;
  mr?: TypeMargin;
  ml?: TypeMargin;
  mb?: TypeMargin;
  mx?: TypeMargin;
  my?: TypeMargin;
};
