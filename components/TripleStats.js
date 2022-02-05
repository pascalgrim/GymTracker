import React from "react";
import { View, Text } from "react-native";
import IconButtonStat from "./IconButtonStat";
import { Colors } from "../colors";

export default function TripleStats({ workout }) {
  if (workout === undefined) {
    workout = {
      AnzahlSaetze: 0,
      AnzahlWiederholungen: 0,
      GewichtGesamt: 0,
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
        iconText="reload"
        color={Colors.lightBlue}
        bgColor={Colors.darkBlue}
        upperText={workout.AnzahlSaetze}
        underText="Sätze"
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
