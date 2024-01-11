export type TypeMargin =
  | 's5'
  | 's8'
  | 's10'
  | 's12'
  | 's14'
  | 'm16'
  | 'm18'
  | 'm24'
  | 'l30'
  | 'l32'
  | 'x60'
  | 'x64';

export type TypeMarginValue = {
  m?: TypeMargin;
  mt?: TypeMargin;
  mr?: TypeMargin;
  ml?: TypeMargin;
  mb?: TypeMargin;
  mx?: TypeMargin;
  my?: TypeMargin;
};
