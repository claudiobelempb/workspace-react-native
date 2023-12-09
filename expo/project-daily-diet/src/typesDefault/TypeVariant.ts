const VARIANT_OBJ_TYPE = {
  VARIANT: {
    green_700: '#639339',
    green_500: '#CBE4B4',
    green_100: '#E5F0DB',
    red_700: '#BF3B44',
    red_500: '#F4E6E7',
    red_100: '#F3BABD',
    gray_700: '#1B1D1E',
    gray_600: '#333638',
    gray_500: '#5C6265',
    gray_400: '#B9BBBC',
    gray_300: '#DDDEDF',
    gray_200: '#EFF0F0',
    gray_100: '#FAFAFA',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  }
};

export type VariantObjType = typeof VARIANT_OBJ_TYPE;

export type VariantObjValue =
  | 'green_700'
  | 'green_500'
  | 'green_100'
  | 'red_700'
  | 'red_500'
  | 'red_100'
  | 'gray_700'
  | 'gray_600'
  | 'gray_500'
  | 'gray_400'
  | 'gray_300'
  | 'gray_200'
  | 'gray_100'
  | 'white'
  | 'black'
  | 'transparent';
