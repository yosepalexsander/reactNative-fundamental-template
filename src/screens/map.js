import React from "react";
import { View, Text } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const cars = ["BMW", "Toyota", "Mercedes"];

  return (
    <View style={{ marginTop: 20 }}>
      {cars.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  );
}
