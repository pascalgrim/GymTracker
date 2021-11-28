import React from "react";
import { Text, StyleSheet } from "react-native";

export default function MyText({
  text,
  bold = false,
  color = "white",
  fontSize = 15,
  centered = false,
}) {
  var fontFamily = bold ? "Poppins_700Bold" : "Poppins_400Regular";
  var textAlign = centered ? "center" : "auto";
  const getStyle = () => {
    const styles = StyleSheet.create({
      text: {
        fontFamily: fontFamily,
        color: color,
        fontSize: fontSize,
        textAlign: textAlign,
      },
    });
    return styles.text;
  };
  return <Text style={getStyle()}>{text}</Text>;
}
