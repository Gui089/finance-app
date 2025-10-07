import React, { useEffect } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AnimatedTabIconProps {
  focused: boolean;
  icon: React.ReactNode;
  activeColor: string;
}

export function AnimatedTabIcon({ focused, icon, activeColor }: AnimatedTabIconProps) {
  const scale = useSharedValue(1);
  const colorProgress = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(focused ? 1.2 : 1, { duration: 250 });
    colorProgress.value = withTiming(focused ? 1 : 0, { duration: 300 });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      ["transparent", activeColor]
    );
    return {
      backgroundColor,
      width: 55,
      height: 55,
      borderRadius: 23.5,
      alignItems: "center",
      justifyContent: "center",
    };
  });

  return (
    <Animated.View style={circleStyle}>
      <Animated.View style={animatedStyle}>{icon}</Animated.View>
    </Animated.View>
  );
}
