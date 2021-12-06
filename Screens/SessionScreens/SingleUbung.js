import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { Colors } from "../../colors";
import { useNavigation } from "@react-navigation/native";

import MyText from "../../components/MyText";

export default function SingleUbung({ neu = false }) {
  const navigation = useNavigation();
  var borderStyle = neu ? "dotted" : "solid";
  var backgroundColor = neu ? "transparent" : Colors.offColor;
  var borderColor = neu ? "white" : "transparent";

  const getStyle = () => {
    const styles = StyleSheet.create({
      container: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 80,
        color: "white",
        height: 100,
        width: "100%",
        backgroundColor: backgroundColor,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        borderStyle: borderStyle,
        borderWidth: 2,
        borderColor: borderColor,
        fontFamily: "Poppins_400Regular",
      },
    });
    return styles.container;
  };

  const handlePress = () => {
    navigation.navigate("UebungScreen");
  };
  return <TouchableOpacity style={getStyle()}></TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: Colors.offColor,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
