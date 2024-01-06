import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { BoxAtoms } from '@atoms/BoxAtoms';
import { useAuth } from '@hooks/useAuth';
import { AppPublicRoutes } from './public.routes';

export function AppRoutes() {
  const { user } = useAuth();
  const { color } = useTheme();

  console.log({ user });

  return (
    <BoxAtoms $flex={{ $flex: 1 }} $bg={{ $background: 'gray_700' }}>
      <NavigationContainer>
        <AppPublicRoutes />
      </NavigationContainer>
    </BoxAtoms>
  );
}
