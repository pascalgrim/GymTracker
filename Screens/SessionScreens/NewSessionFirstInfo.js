import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../colors";
import { TextInput, Chip } from "react-native-paper";
import myTheme from "../../myTheme";

export default function NewSessionFirstInfo() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 35,
          fontWeight: "bold",
          paddingTop: 100,
          paddingBottom: 70,
        }}
      >
        Neue Session
      </Text>
      <Chip style={{ color: "white" }}>asjdiasd</Chip>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bg,
  },
});
