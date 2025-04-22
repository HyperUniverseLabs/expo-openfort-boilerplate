import "@openfort/react-native/polyfills";
import { Slot } from "expo-router";
import { OpenfortProvider } from "@/hooks/useOpenfort";

export default function RootLayout() {
  return (
    <OpenfortProvider customUri={process.env.EXPO_PUBLIC_IFRAME_URL}>
      {/* <Redirect href="/main" /> */}
      <Slot />
    </OpenfortProvider>
  );
}
