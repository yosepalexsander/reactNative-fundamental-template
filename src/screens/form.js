import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.textInput} defaultValue="ex: yosep@dumbways.id" />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.textInput} defaultValue="ex: yosep123" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
  },
  header: {
    color: "#f20d32",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 50,
  },
  textInput: {
    color: "",
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#f20d32",
    marginBottom: 10,
    padding: 10,
    color: "#E5E5E5",
  },
  label: {
    color: "#f20d32",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  button: {
    backgroundColor: "#f20d32",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
});
