import React from "react";
import { Text, StyleSheet } from "react-native";

export default function MyText({
  text,
  bold = false,
  color = "white",
  fontSize = 15,
  centered = false,
  light = false,
}) {
  const getFontFamily = () => {
    if (bold) {
      return "Poppins_700Bold";
    } else if (light) {
      return "Poppins_300Light";
    }
    return "Poppins_400Regular";
  };
  var textAlign = centered ? "center" : "auto";
  const getStyle = () => {
    const styles = StyleSheet.create({
      text: {
        fontFamily: getFontFamily(),
        color: color,
        fontSize: fontSize,
        textAlign: textAlign,
      },
    });
    return styles.text;
  };
  return <Text style={getStyle()}>{text}</Text>;
}
