import { Theme } from "@/src/theme/theme";
import { useTheme } from "@shopify/restyle";
import { StyleProp, View, ViewStyle } from "react-native";

interface LargeDividerProps {
  rotate?: string;
  style?:StyleProp<ViewStyle>;
}

export function LargeDivider({ rotate = "0deg", style }: LargeDividerProps) {
  const theme = useTheme<Theme>();

  return (
    <View
      style={[{
        width: 108,
        height: 2,
        backgroundColor: theme.colors.fencegreen,
        transform: [{ rotate: rotate }]}, style]}
    />
  );
}
