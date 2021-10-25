import React from 'react';
import { Text, View, Button } from 'react-native';
import Choice from './Choice'
import Question from './Question'

export default function FormPage(props) {
  return (
    <View>
      <Question formQuestion="Personal Information"></Question>
      <Choice choiceOption="First Name"></Choice>
      <Choice choiceOption="Email"></Choice>
      <Choice choiceOption="Occupation"></Choice>
      <Choice choiceOption="Age"></Choice>

      <Question formQuestion="Interests"></Question>
      <Choice choiceOption="Hiking"></Choice>
      <Choice choiceOption="Cryptocurrency"></Choice>
      <Choice choiceOption="Artificial Intelligence"></Choice>
      <Choice choiceOption="Basketball"></Choice>

      <Question formQuestion="Struggles"></Question>
      <Choice choiceOption="Stress"></Choice>
      <Choice choiceOption="Food"></Choice>
      <Choice choiceOption="Work"></Choice>
      <Choice choiceOption="Education"></Choice>
      <Button title="Submit"></Button> 

    </View>
  );
}