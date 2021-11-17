import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import EmbedExpression from "./src/screens/embedExpression";

//Import Screen

export default function App() {
  return (
    <View style={{ marginTop: 50 }}>
      <StatusBar />
      <EmbedExpression />
    </View>
  );
}
