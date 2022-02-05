import React from "react";
import UebungEditScreen from "./UebungEditScreen";
import UebungNoEditScreen from "./UebungNoEditScreen";

export default function UebungHelperScreen({ route }) {
  const workout = route.params.workout;
  const uebung = route.params.uebung;

  return route.params.editable ? (
    <UebungEditScreen
      workout={workout}
      uebung={uebung}
      id={route.params.uebungId}
    />
  ) : (
    <UebungNoEditScreen
      workout={workout}
      uebung={uebung}
      id={route.params.uebungId}
    />
  );
}
