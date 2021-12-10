import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { Colors } from "../../colors";

import MyText from "../../components/MyText";

export default function SingleUbung({ name, sets }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View>
          <MyText text={name !== undefined ? name : "Name der Übung"} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <MyText text="Sets" />
          <MyText text={sets !== undefined ? sets : "3"} />
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <MyText text="..." />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    fontSize: 80,
    color: "white",
    height: 100,
    width: "100%",
    backgroundColor: Colors.offColor,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
  },
  left: {
    flex: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
