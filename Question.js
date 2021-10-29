import React from "react";
import { Text, View, StyleSheet} from "react-native";

export default function Question(props) {
  return (
      <Text style={styles.question}>{props.formQuestion}</Text>
  );
}


const styles = StyleSheet.create({
  question: {
    margin:10,
  },
});

