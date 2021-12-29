import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SelectScreen from "./selectScreen";
import Navigator from "./routes/homeStack";

export default function App(props) {
  return (
      <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
