import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </>
  );
}
