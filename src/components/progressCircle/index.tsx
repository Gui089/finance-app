import { Theme } from "@/src/theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const size = 68.34;
const strokeWidth = 4;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

export function ProgressCircle({ progress = 0.35 }) {
  const theme = useTheme<Theme>();
  const animation = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: progress,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const strokeDashoffset = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={styles.template}>
      <View style={styles.container}>
        <Svg width={size} height={size}>
          <Circle
            stroke="white"
            fill="transparent"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />

          <AnimatedCircle
            stroke={theme.colors.oceanblue}
            fill="transparent"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference}, ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </Svg>

        <Ionicons name="car-sport-outline" size={32} color="white" style={styles.icon} />
      </View>

      <View style={{ maxWidth: 60, marginLeft:5}}>
        <Text style={{textAlign:"center", marginTop:10}}>Saving On Goals</Text>
      </View>
    </View>
  );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    justifyContent: "center",
    alignItems: "center",
  },
  template: {
    justifyContent: "center",
    marginLeft:20
  },
  icon: {
    position: "absolute",
  },
});
