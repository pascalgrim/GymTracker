import { height } from "dom-helpers";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { Colors } from "../colors";
import MyText from "./MyText";
import { useNavigation } from "@react-navigation/native";

export default function UebungsItem({ workout, uebung, editable }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* ÜBERSCHRIFT CONTAINER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MyText text={"Übung " + uebung.Nummer} />
        <MyText text={uebung.muskelgruppe} light />
      </View>
      {/* MAIN ITEM */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* BALKEN */}
        <View>
          <ColorBalken color={Colors.blue} />
        </View>
        {/* TEXT UND BUTTON CONTAINER */}
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            flex: 1,
            paddingLeft: 30,
          }}
        >
          {/* TEXT CONTAINER */}
          <View>
            <MyText text={uebung.name} />
            <MyText text="3 Sätze" color="grey" fontSize={10} />
          </View>
          {/* BUTTON CONTAINER */}
          <TouchableOpacity
            style={{
              backgroundColor: Colors.grey,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
            onPress={() => {
              navigation.navigate("UebungHelperScreen", {
                workout: workout,
                uebung: uebung,
                editable: editable,
              });
            }}
          >
            <IconButton icon="chevron-right" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    height: 80,
    marginVertical: 20,
  },
});

const ColorBalken = ({ color = "grey" }) => {
  return (
    <View
      style={{
        height: "80%",
        width: 10,
        backgroundColor: color,
        borderRadius: 30,
        marginHorizontal: 3,
      }}
    ></View>
  );
};
