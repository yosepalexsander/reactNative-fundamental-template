import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import List from "./src/screens/flatList";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <List />
    </View>
  );
}
