import { VariantObjValue } from './TypeVariant';

export type TypeFont = {
  VARIANT?: VariantObjValue;
  FAMILY?: TypeFontFamily;
  STYLE?: TypeFontStyle;
  LENE_HEIGHT?: TypeFontLineHeight;
  WHEIGH?: TypeFontWeigh;
  SIZE?: TypeFontSize;
};

export type TypeFontSize =
  | 's8'
  | 's14'
  | 'm16'
  | 'm18'
  | 'l24'
  | 'x32'
  | 'x40'
  | 'xl80';

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
