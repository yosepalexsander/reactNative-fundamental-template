import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const cars = [{ key: "BWM" }, { key: "Mercedes" }, { key: "Toyota" }, { key: "Chevrolet" }];
  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList data={cars} renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});
