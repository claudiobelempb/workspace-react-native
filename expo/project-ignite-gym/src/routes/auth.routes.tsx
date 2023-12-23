import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { SigninScreen } from '@screens/SigninScreen';
import { SignupScreen } from '@screens/SignupScreen';

type AppAuthRoutesType = {
  signin: undefined;
  signup: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AppAuthRoutesType>;

const { Navigator, Screen } = createNativeStackNavigator<AppAuthRoutesType>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='signin' component={SigninScreen} />
      <Screen name='signup' component={SignupScreen} />
    </Navigator>
  );
}
