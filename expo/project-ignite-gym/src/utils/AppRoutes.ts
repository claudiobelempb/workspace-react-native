import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppAuthRoutesType = {
  signin: undefined;
  signup: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AppAuthRoutesType>;
const navigation = useNavigation<AuthNavigatorRoutesProps>();

export const handleGoScreen = () => {
  navigation.goBack();
};

export const handleGoSiginScreen = () => {
  navigation.navigate('signin');
};

export const handleGoSigupScreen = () => {
  navigation.navigate('signup');
};
