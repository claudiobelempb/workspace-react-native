import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { SigninScreen } from '@screens/SigninScreen';
import { SignupScreen } from '@screens/SignupScreen';

type AppPublicAuthRoutesType = {
  signin: undefined;
  signup: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AppPublicAuthRoutesType>;

const { Navigator, Screen } =
  createNativeStackNavigator<AppPublicAuthRoutesType>();

export function AppPublicRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='signin' component={SigninScreen} />
      <Screen name='signup' component={SignupScreen} />
    </Navigator>
  );
}
