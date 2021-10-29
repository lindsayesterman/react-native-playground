import React from "react";
import { Text, ScrollView, Button, StyleSheet, View } from "react-native";
import Choice from "./Choice";
import Question from "./Question";

export default function FormPage(props) {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <Question formQuestion="Personal Information"></Question>
      <View style={styles.container}>
        <Choice choiceOption="First Name"></Choice>
        <Choice choiceOption="Email"></Choice>
        <Choice choiceOption="Occupation"></Choice>
        <Choice choiceOption="Age"></Choice>
      </View>

      <Question formQuestion="Interests"></Question>
      <View style={styles.container}>
        <Choice choiceOption="Hiking"></Choice>
        <Choice choiceOption="Cryptocurrency"></Choice>
        <Choice choiceOption="Artificial Intelligence"></Choice>
        <Choice choiceOption="Basketball"></Choice>
      </View>

      <Question formQuestion="Struggles"></Question>
      <View style={styles.container}>
        <Choice choiceOption="Stress"></Choice>
        <Choice choiceOption="Food"></Choice>
        <Choice choiceOption="Work"></Choice>
        <Choice choiceOption="Education"></Choice>
      </View>

      <Button title="Submit"></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
