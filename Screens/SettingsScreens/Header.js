import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../colors";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        color={Colors.red}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
