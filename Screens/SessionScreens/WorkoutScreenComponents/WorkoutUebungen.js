import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../../colors";
import UebungenListe from "../../../components/UebungenListe";
import MyText from "../../../components/MyText";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function WorkoutUebungen({ workout }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg }}>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: Colors.blue,
          borderRadius: 20,
          marginVertical: 10,
          height: 60,
        }}
        onPress={() =>
          navigation.navigate("UebungInfoScreen", {
            editable: true,
            workout: workout,
          })
        }
      >
        <MyText text="Übung 1" />
        <IconButton
          icon="plus"
          style={{ position: "absolute", right: 10 }}
          color={Colors.blue}
        />
      </TouchableOpacity>
      <UebungenListe workout={workout} />
    </View>
  );
}
