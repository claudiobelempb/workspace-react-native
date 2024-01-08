import { NavigationContainer } from '@react-navigation/native';

import { BoxAtoms } from '@atoms/BoxAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { useAuth } from '@hooks/useAuth';
import { AppPrivateRoute } from './private.routes';
import { AppPublicRoutes } from './public.routes';

export function AppRoutes() {
  const { user, isLoadingUser } = useAuth();

  if (isLoadingUser) {
    return (
      <LoadingAtoms
        $flex={{ $flex: 1 }}
        $bg={{ $background: 'gray_700' }}
        size={'large'}
      />
    );
  }

  return (
    <BoxAtoms $flex={{ $flex: 1 }} $bg={{ $background: 'gray_700' }}>
      <NavigationContainer>
        {!user.id ? <AppPublicRoutes /> : <AppPrivateRoute />}
      </NavigationContainer>
    </BoxAtoms>
  );
}
