export type TypeText = {
  textLineThrough?: 'line-through';
  textTransform?: TypeTextTransform;
  textAlign?: TypeTetxAlign;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: number;
  dynamic?: number;
};

export type TypeTextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana';

export type TypeTetxAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent';
