export type TypeMargin =
  | 's8px'
  | 's12px'
  | 's14px'
  | 'm16px'
  | 'm18px'
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
