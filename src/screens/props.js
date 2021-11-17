import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import List from "../components/list";

export default function Props() {
  // Create variable to insert link Image
  const img = "https://avatars3.githubusercontent.com/u/34464790?s=220&v=4";

  return (
    <View>
      <StatusBar />
      <Text>On th Image element using the default props, namely source</Text>
      <Image
        source={{
          uri: img,
        }}
        style={{ width: 200, height: 200 }}
      />
      <List listData="TOYOTA" />
      <List listData="Mercedes" />
      <List listData="Mitsubishi" />
    </View>
  );
}
