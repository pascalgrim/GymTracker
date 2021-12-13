import React from "react";
import { View, Text } from "react-native";
import IconButtonStat from "./IconButtonStat";
import { Colors } from "../colors";

export default function TripleStats() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
      }}
    >
      <IconButtonStat
        iconText="weight-kilogram"
        color={Colors.lightOrange}
        bgColor={Colors.darkOrange}
        upperText="3193"
        einheit="Kg"
        underText="Gewicht"
      />
      <IconButtonStat
        iconText="clock-time-three-outline"
        color={Colors.lightBlue}
        bgColor={Colors.darkBlue}
        upperText="237"
        einheit="min"
        underText="Länge"
      />
      <IconButtonStat
        iconText="repeat"
        color={Colors.lightGreen}
        bgColor={Colors.darkGreen}
        upperText="478"
        underText="Reps"
      />
    </View>
  );
}
