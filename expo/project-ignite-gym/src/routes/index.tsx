import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { BoxAtoms } from '@atoms/BoxAtoms';
import { AuthRoutes } from './auth.routes';

export function AppAuthRoutes() {
  const { color } = useTheme();

  return (
    <BoxAtoms $flex={{ $flex: 1 }} $bg={{ $background: 'gray_700' }}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </BoxAtoms>
  );
}
