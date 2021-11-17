import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function List(props) {
  return (
    <View>
      <StatusBar />
      <Text>{props.listData}</Text>
    </View>
  );
}
