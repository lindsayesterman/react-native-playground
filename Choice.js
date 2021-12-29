import React, { useState } from 'react';
import { TextInput, StyleSheet } from "react-native";
export default function Choice(props) {

  const [textInput, setTextInput] = useState("");

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
    color: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#CB7AAA",
    width: 280,
    padding: 13,
    margin: 4,
  },
});
