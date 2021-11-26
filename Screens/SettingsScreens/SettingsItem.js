import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SettingsItem({
  text,
  description,
  onPress,
  navScreen = null,
}) {
  const navigation = useNavigation();
  const handlePress = () => {
    if (navScreen !== null) {
      navigation.navigate(navScreen);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  text: {
    fontSize: 17,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "grey",
  },
});
