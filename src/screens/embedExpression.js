import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function getMajor(batch) {
    return "Full Stack " + batch;
  }

  // Create a variable Here
  const companyName = "dumbways.id";

  return (
    <View>
      <StatusBar />
      <Text>
        Welcome to {companyName} {getMajor(27)}
      </Text>
    </View>
  );
}
