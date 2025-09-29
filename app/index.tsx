import { Redirect } from 'expo-router';

export default function LoginScreen() {

  const user = "gui";

  if (user) {
    return <Redirect href="/(private)/(tabs)" />;
  }

  return <Redirect href="/" />;
}