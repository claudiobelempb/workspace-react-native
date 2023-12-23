export type TypeFontSize =
  | 's8'
  | 's12'
  | 's14'
  | 'm16'
  | 'm18'
  | 'm24'
  | 'm20'
  | 'l32'
  | 'x64';

export type TypeFontFamily = {
  roboto: {
    regular: 'Roboto_400Regular';
    bold: 'Roboto_700Bold';
  };
};

export type TypeFontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | 'initial'
  | 'inherit';

export type TypeFontLineHeight = '65%' | '130%' | '160%';

export type TypeFontWeigh =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'extraBold';
