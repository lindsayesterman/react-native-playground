import React from "react";
import { Text, StyleSheet} from "react-native";

export default function Question(props) {
  return (
      <Text style={styles.question}>{props.formQuestion}</Text>
  );
}


const styles = StyleSheet.create({
  question: {
    marginVertical:20,
    fontSize: 17,
    fontWeight: "bold"
  },
});

