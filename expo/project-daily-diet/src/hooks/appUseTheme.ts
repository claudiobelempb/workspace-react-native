import { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

export default function appUseTheme() {
  const appTheme = useContext(ThemeContext);
  return appTheme;
}
