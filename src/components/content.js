import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Content() {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>This is a Content</Text>
    </View>
  );
}
