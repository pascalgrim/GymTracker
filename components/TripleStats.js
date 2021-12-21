import React from "react";
import { View, Text } from "react-native";
import IconButtonStat from "./IconButtonStat";
import { Colors } from "../colors";

export default function TripleStats({ workout }) {
  if (workout === undefined) {
    workout = {
      AnzahlSaetze: 5,
      AnzahlWiederholungen: 300,
      GewichtGesamt: 1313,
    };
  }
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
        upperText={workout.GewichtGesamt}
        einheit="Kg"
        underText="Gewicht"
      />
      <IconButtonStat
        iconText="clock-time-three-outline"
        color={Colors.lightBlue}
        bgColor={Colors.darkBlue}
        upperText="0"
        einheit="min"
        underText="Länge"
      />
      <IconButtonStat
        iconText="repeat"
        color={Colors.lightGreen}
        bgColor={Colors.darkGreen}
        upperText={workout.AnzahlWiederholungen}
        underText="Reps"
      />
    </View>
  );
}
