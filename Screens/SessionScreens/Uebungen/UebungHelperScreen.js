import React from "react";
import { View, Text } from "react-native";
import UebungEditScreen from "./UebungEditScreen";
import UebungNoEditScreen from "./UebungNoEditScreen";

export default function UebungHelperScreen({ route }) {
  const workout = route.params.workout;
  const uebung = route.params.uebung;
  console.log("ID: " +route.params.uebungId)
  return route.params.editable ? (
    <UebungEditScreen workout={workout} uebung={uebung} id={route.params.uebungId} />
  ) : (
    <UebungNoEditScreen workout={workout} uebung={uebung}  id={route.params.uebungId}/>
  );
}
