import { useTheme } from "@shopify/restyle";
import { StyleSheet, Text, View } from "react-native";

export function FooterScreen() {
  const theme = useTheme();
  return (
    <View
      style={[{ backgroundColor: theme.colors.secondary }, styles.container]}
    >
      <Text>Footer</Text>
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
