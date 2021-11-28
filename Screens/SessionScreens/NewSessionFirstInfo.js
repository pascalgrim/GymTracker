import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../colors";
import { TextInput, Chip, Button } from "react-native-paper";
import myTheme from "../../myTheme";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function NewSessionFirstInfo() {
  const navigation = useNavigation();
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bg,
  },
});
