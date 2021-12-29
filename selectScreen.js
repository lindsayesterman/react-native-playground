import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function SelectScreen({ navigation }) {
  const [mood, setMood] = useState("");

  const pressHandler = () => {
    navigation.push("MoodExp");
  };

  return (
    <View>
      <TextInput
        placeholder="Enter mood here: "
        onChangeText={(mood) => setMood(mood)}
      />
      <Button title="Select Sad" onPress={(e) => setMood("sad")}></Button>
      <Button
        title="Select Neutral"
        onPress={(e) => setMood("neutral")}
      ></Button>
      <Button title="Select Happy" onPress={(e) => setMood("happy")}></Button>
      <Text>mood: {mood}</Text>
      <Button title="mood exp" onPress={pressHandler}></Button>
    </View>
  );
}
