import { ReactNode } from 'react';
import { View } from 'react-native';

import { HeadingContainer } from './styles';
type Props = {
  children: ReactNode;
};

export function HeadingAton({ children }: Props) {
  return (
    <View>
      <HeadingContainer>{children}</HeadingContainer>
    </View>
  );
}
