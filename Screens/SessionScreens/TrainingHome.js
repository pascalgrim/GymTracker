import React, { useState, useRef } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { Colors } from "../../colors";
import MyText from "../../components/MyText";
import myTheme from "../../myTheme";
import SingleUbung from "./SingleUbung";

import MyTimer from "../../components/MyTimer";

export default function TrainingHome({ route }) {
  const title = route.params.titel;
  const traininsID = route.params.id;
  const [timer, setTimer] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <View style={{ flex: 2 }}>
            <MyText bold text={title} fontSize={35} />
            <MyTimer timer={timer} setTimer={setTimer} />
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: Colors.green,
              height: 40,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyText text="Fertig" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 50 }}>
          <MyText text="Übungen" />
          <Divider theme={myTheme} />
          <View style={styles.itemswrapper}>
            <SingleUbung />
            <SingleUbung />
            <SingleUbung />
            <SingleUbung neu/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bg,
  },
  mainContent: {
    flex: 1,
  },
  header: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemswrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 30,
  },
  timer: {},
  timerText: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "white",
  },
});
