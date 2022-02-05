// Wird aktuell nicht gebraucht
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function StatsRoute() {
  const navigation = useNavigation();

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
