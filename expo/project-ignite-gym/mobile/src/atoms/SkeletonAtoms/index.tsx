import { typeDefault } from '@typesDefault/typesDefault';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { SkeletonContainer, SkeletonContent } from './styles';

const { width } = Dimensions.get('window');

export function SkeletonAtoms({ ...props }: typeDefault) {
  const translateX = useRef(new Animated.Value(-width)).current;

  function circleAnimated() {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: false,
        duration: 1800
      })
    ).start(() => {});
  }

  useEffect(() => {
    circleAnimated();
    return () => circleAnimated();
  }, [width]);

  return (
    <SkeletonContainer {...props}>
      {[...Array(props.$lines)].map((_, index) => (
        <SkeletonContent
          key={index}
          {...props}
          style={{
            transform: [{ translateX: translateX }]
          }}
        ></SkeletonContent>
      ))}
    </SkeletonContainer>
  );
}
