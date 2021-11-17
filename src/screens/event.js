import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function Event() {
  // Create Function Here
  function greeting() {
    return alert("Good morning Everyone");
  }

  function changeText() {
    alert("change event triggered");
  }
  return (
    <View>
      <StatusBar />
      <Text>If you press sign "Click Here" then alert will be triggered</Text>
      <TouchableOpacity onPress={() => alert("Hello Full Stack Dumbways Batch 27")}>
        <Text>Click Here</Text>
      </TouchableOpacity>

      <Text>If you press sign "Click Here" then alert will be triggered</Text>
      <TouchableOpacity onPress={greeting}>
        <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}
