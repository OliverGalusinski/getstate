import { Stack } from "expo-router";
import useIsNavigationReady from "@/app/hooks/useIsNavigationReady";
import { View } from "react-native";

export default function RootLayout() {
  const isNavigationReady = useIsNavigationReady();

  // Always render the navigation container
  return (
      <Stack>
        {!isNavigationReady ? (
            <Stack.Screen name="index" options={{ headerShown: false }} />
        ) : (
            <Stack.Screen name="index" />
        )}
      </Stack>
  );
}