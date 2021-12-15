import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../../../colors";
import UebungenListe from "../../../components/UebungenListe";

export default function WorkoutUebungen({ workout }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg }}>
      <UebungenListe workout={workout} />
    </View>
  );
}
