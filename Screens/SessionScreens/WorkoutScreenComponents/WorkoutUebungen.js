import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../../colors";
import UebungenListe from "../../../components/UebungenListe";
import MyText from "../../../components/MyText";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function WorkoutUebungen({ workout, editable }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg }}>
      {editable ? (
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
              workout: workout,
            })
          }
        >
          <MyText text="Übung hinzufügen" />
          <IconButton
            icon="plus"
            style={{ position: "absolute", right: 10 }}
            color={Colors.blue}
          />
        </TouchableOpacity>
      ) : null}

      <View style={{ paddingBottom: editable ? 120 : 0 }}>
        <UebungenListe workout={workout} editable={editable} />
      </View>
    </View>
  );
}
