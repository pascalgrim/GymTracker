import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyText from "./MyText";
import { Colors } from "../colors";

export default function WeiterButton({ disabled = false }) {
  const navigation = useNavigation();
  const borderColor = disabled ? "grey" : Colors.blue;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        borderColor: borderColor,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 70,
      }}
    >
      <MyText text="Weiter" color={disabled ? "grey" : "white"} />
    </TouchableOpacity>
  );
}
