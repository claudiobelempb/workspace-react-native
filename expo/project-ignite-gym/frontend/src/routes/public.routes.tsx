import { IconAtoms } from '@atoms/IconAtoms';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { ExerciseScreen } from '@screens/ExerciseScreen';
import { HistoryScreen } from '@screens/HistotyScreen';
import { HomeScreen } from '@screens/HomeScreen';
import { ProfileScreen } from '@screens/ProfileScreen';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

type AppRoutesType = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: {
    exerciseId: string;
  };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesType>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesType>();

export function AppPublicRoute() {
  const { color, space } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.green_500,
        tabBarInactiveTintColor: color.gray_300,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: Platform.OS === 'android' ? 'auto' : 96,
          // paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: color.gray_600,
          borderTopWidth: 0,
          paddingTop: space.pt.l32,
          paddingBottom: space.pt.l32
        }
      }}
    >
      <Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <IconAtoms
              name='home'
              colorIcon={color}
              // size={size}
              // color={color}
              // $color={{ $color: 'gray_100' }}
              $font={{ $size: 'l32' }}
              $width={{ $width: 32 }}
              $height={{ $height: 32 }}
            />
          )
        }}
      />
      <Screen
        name='history'
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <IconAtoms
              name='clock'
              colorIcon={color}
              // size={size}
              // $color={{ $color: 'gray_100' }}
              $font={{ $size: 'l32' }}
              $width={{ $width: 32 }}
              $height={{ $height: 32 }}
            />
          )
        }}
      />
      <Screen
        name='profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <IconAtoms
              name='user'
              colorIcon={color}
              // size={size}
              // $color={{ $color: 'gray_100' }}
              $font={{ $size: 'l32' }}
              $width={{ $width: 32 }}
              $height={{ $height: 32 }}
            />
          )
        }}
      />
      <Screen
        name='exercise'
        component={ExerciseScreen}
        options={{
          tabBarButton: () => null
        }}
      />
    </Navigator>
  );
}
