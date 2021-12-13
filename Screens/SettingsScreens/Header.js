import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../colors";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import MyText from "../../components/MyText";

export default function Header({ title }) {
  const navigation = useNavigation();

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
