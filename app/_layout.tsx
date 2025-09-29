import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import theme from '@/src/theme/theme';
import { ThemeProvider } from '@shopify/restyle';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="(private)" options={{ headerShown:false }} />
        <Stack.Screen name="index" options={{ headerShown:false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
