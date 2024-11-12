import { SplashScreen, Stack } from "expo-router";
import AppProvider from "./AppProvider";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProvider>
  );
}
