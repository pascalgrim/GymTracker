import React from "react";
import { View, Text } from "react-native";
import UebungEditScreen from "./UebungEditScreen";
import UebungNoEditScreen from "./UebungNoEditScreen";

export default function UebungHelperScreen({ route }) {
  const workout = route.params.workout;
  const uebung = route.params.uebung;
  console.log("----2---- " + workout.trainingsId);
  return route.params.editable ? (
    <UebungEditScreen workout={workout} uebung={uebung} />
  ) : (
    <UebungNoEditScreen workout={workout} uebung={uebung} />
  );
}
