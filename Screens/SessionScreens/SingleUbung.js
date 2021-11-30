import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { Colors } from "../../colors";

import MyText from "../../components/MyText";

export default function SingleUbung({ neu = false }) {
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
        width: 150,
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
  return <TouchableOpacity style={getStyle()}></TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 150,
    backgroundColor: Colors.offColor,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
