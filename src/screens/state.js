import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

export default function State() {
  // Init State
  const [counter, setCounter] = useState(0);

  //for TextInput
  const [value, setValue] = useState("");

  //Create Function Add
  function increment() {
    setCounter(counter + 1);
  }
  //Create Function Less
  function decrement() {
    setCounter(counter > 0 ? counter - 1 : counter);
  }

  return (
    <View>
      <StatusBar />
      <Text>If you click increment button, it will increase counter state, vice versa</Text>
      <Text>{counter}</Text>
      <TouchableHighlight onPress={increment}>
        <Text>Increment</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={decrement}>
        <Text>Decrement</Text>
      </TouchableHighlight>

      {/* practice change event */}
      <TextInput onChangeText={setValue} placeholder="input your value" style={{ marginTop: 60 }}></TextInput>
    </View>
  );
}
