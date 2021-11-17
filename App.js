import React from "react";
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme, Box, Text } from "native-base";

// Import font with Expo
import AppLoading from "expo-app-loading";
import { useFonts, BalsamiqSans_400Regular, BalsamiqSans_400Regular_Italic } from "@expo-google-fonts/balsamiq-sans";

// Import Container
import Container from "./Container";

export default function App() {
  // Load Font with Expo
  let [fontLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
  });

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic",
      },
    },
  };

  // Setup Theme
  const customColor = {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  };

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customColor,
    fontConfig,
    fonts: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
    config: {
      initialColorMode: "dark",
    },
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Container />
    </NativeBaseProvider>
  );
}
