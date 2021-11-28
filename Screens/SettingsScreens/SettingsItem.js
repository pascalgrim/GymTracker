import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyText from "../../components/MyText";

export default function SettingsItem({
  text,
  description,
  onPressFunction = null,
  navScreen = null,
}) {
  const navigation = useNavigation();
  const handlePress = () => {
    if (navScreen !== null) {
      navigation.navigate(navScreen);
    } else {
      if (onPressFunction !== null) {
        onPressFunction();
      }
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <MyText text={text} fontSize={17} />
      <MyText text={description} fontSize={14} color="grey" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  description: {
    fontSize: 14,
    color: "grey",
  },
});
