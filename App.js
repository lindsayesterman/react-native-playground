import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FormPage from "./FormPage";

export default function App(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <View style={styles.container}>
      {showForm ? null : (
        <Button
          onPress={() => setShowForm(true)}
          title="Fill out questionnare"
        ></Button>
      )}
      {showForm ? <FormPage></FormPage> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
