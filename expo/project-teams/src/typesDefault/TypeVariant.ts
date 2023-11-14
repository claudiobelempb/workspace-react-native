const VARIANT_OBJ_TYPE = {
  VARIANT: {
    GREEN_700: '#00875F',
    GREEN_500: '#00B37E',
    RED_100: '#F75A68',
    RED_900: '#AA2834',
    GRAY_700: '#121214',
    GRAY_600: '#202024',
    GRAY_500: '#29292E',
    GRAY_400: '#323238',
    GRAY_300: '#7C7C8A',
    GRAY_200: '#C4C4CC',
    GRAY_100: '#E1E1E6',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    TRANSPARENT: 'transparent'
  }
};

export type VariantObjType = typeof VARIANT_OBJ_TYPE;

export type VariantObjValue =
  | 'green_700'
  | 'green_500'
  | 'red_100'
  | 'red_900'
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
