import { Theme } from "@/src/theme/theme";
import { useTheme } from "@shopify/restyle";
import { StyleSheet, View } from "react-native";
import { CardCash } from "../../cardCash";

export function FooterScreen() {
  const theme = useTheme<Theme>();
  return (
    <View
      style={[{ backgroundColor: theme.colors.cyprus }, styles.container]}
    >
      <CardCash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    flex: 1,
    height: "100%",
    padding: 24,
  },
});
