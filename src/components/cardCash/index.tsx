import { useTheme } from "@shopify/restyle";
import { StyleSheet, View } from "react-native";
import { LargeDivider } from "../largeDivider";
import { ProgressCircle } from "../progressCircle";

export function CardCash() {
  const theme = useTheme();

  return (
    <View style={[{ backgroundColor: theme.colors.main }, styles.container]}>
      <ProgressCircle />
      <LargeDivider rotate="90deg" />
      <LargeDivider style={{marginRight:50}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 152,
    borderRadius: 40,
    flexDirection:"row",
    alignItems:"center",
    padding:20
  },
});
