import React, { useState } from "react";
import { Text, ScrollView, Pressable, StyleSheet, View } from "react-native";
import Choice from "./Choice";
import Question from "./Question";
import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

const struggles = [
  {
    name: "Stress",
    id: 0,
  },
  {
    name: "Relationship Problems",
    id: 1,
  },
  {
    name: "Work",
    id: 2,
  },
  {
    name: "Anxiety",
    id: 3,
  },
  {
    name: "Depression",
    id: 4,
  },
  {
    name: "Death and illness",
    id: 5,
  },
  {
    name: "Loneliness",
    id: 6,
  },
  {
    name: "Family problems",
    id: 7,
  },
  {
    name: "Trauma",
    id: 8,
  },
  {
    name: "Identity",
    id: 9,
  },
];
export default function FormPage(props) {
  const [strugglesList, setStrugglesList] = useState([]);
  const [textInput, setTextInput] = useState("");

  return (
    <ScrollView
      style={{ marginTop: 50, flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Question formQuestion="Personal Information"></Question>
      <View style={styles.container}>
        <Choice
          choiceOption="First Name"
          value={textInput}
          onChange={e => setTextInput(e.target.value)}
        ></Choice>
        {/* <Choice choiceOption="Email"></Choice>
        <Choice choiceOption="Occupation"></Choice>
        <Choice choiceOption="Age"></Choice> */}
      </View>
      <Question formQuestion="Struggles"></Question>
      {/* <View>
        <SectionedMultiSelect
          items={struggles}
          IconRenderer={Icon}
          uniqueKey="id"
          selectText="Choose some of your struggles..."
          showDropDowns={true}
          readOnlyHeadings={true}
          selectedItems={strugglesList}
          onSelectedItemsChange={setStrugglesList}
        />
      </View> */}
      <Pressable style={styles.button} >
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    margin: 10,
    backgroundColor: "#aBB6C4",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
