import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function Choice(props) {
  return (
    <TextInput
      style={styles.choice}
      placeholderTextColor="white"
      placeholder={props.choiceOption}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  choice: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#CB7AAA",
    width: 250,
    padding: 10,
  },
});
