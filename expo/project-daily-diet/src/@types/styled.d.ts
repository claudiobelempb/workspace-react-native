import 'styled-components';

import ThemeDefault from '../themes/ThemeDefault';

declare module 'styled-components' {
  type TypeThemeDefault = typeof ThemeDefault;
  export interface DefaultTheme extends TypeThemeDefault {}
}
