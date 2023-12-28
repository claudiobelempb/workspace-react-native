import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { BoxAtoms } from '@atoms/BoxAtoms';
import { AppRoute } from './app.routes';

export function AppRoutes() {
  const { color } = useTheme();

  return (
    <BoxAtoms $flex={{ $flex: 1 }} $bg={{ $background: 'gray_700' }}>
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </BoxAtoms>
  );
}
