import { height } from "dom-helpers";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { Colors } from "../colors";
import MyText from "./MyText";
import { useNavigation } from "@react-navigation/native";

export default function WorkoutItem({ item }) {
  //TODO: Funktion, die Date in Text umwandelt (z.b. 1 day ago)

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* DATUM CONTAINER */}
      <View
        style={{
          backgroundColor: Colors.blue, // TODO: Ändern
          width: 60,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MyText text="DEZ" fontSize={20} color="black" light />
        <MyText text="22" fontSize={18} color="black" />
      </View>
      {/* MAIN CONTENT CONTAINER */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            paddingLeft: 20,
            paddingVertical: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <ColorBalken />
            <ColorBalken />
            <ColorBalken />
          </View>
          <View>
            <MyText text={item.titel} />
          </View>
          <View>
            <MyText
              text={`${3} Übungen`} // TODO: Ändern
              color="grey"
              fontSize={12}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.grey,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate("WorkoutScreen", { item: item })}
        >
          <IconButton icon="chevron-right" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    marginVertical: 10,
  },
});

const ColorBalken = ({ color = "grey" }) => {
  return (
    <View
      style={{
        height: 6,
        width: 30,
        backgroundColor: color,
        borderRadius: 30,
        marginHorizontal: 3,
      }}
    ></View>
  );
};
