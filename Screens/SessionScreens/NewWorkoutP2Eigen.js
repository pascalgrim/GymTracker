import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import HeaderNewWorkout from "../../components/HeaderNewWorkout";
import MyText from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";
import WeiterButton from "../../components/WeiterButton";
import { Colors } from "../../colors";
import myTheme from "../../myTheme";
import { Kategorien } from "../../Muskelgruppen";

import { DBM } from "../../DatabaseManager";
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";

export default function NewWorkoutP2Eigen() {
  const navigation = useNavigation();
  const [selectionID, setselectionID] = useState(null);
  const [kategorie, setKategorie] = useState(null);
  const [info, setInfo] = useState("");

  const renderItem = ({ item }) => (
    <WorkoutSelection
      img={item.img}
      text={item.title}
      selectionID={selectionID}
      setselectionID={setselectionID}
      kategorie={kategorie}
      setKategorie={setKategorie}
    />
  );
  async function erstelleTraining() {
    DBM.createWorkout(selectionID, kategorie).then((docRef) => {
      DBM.getWorkoutSnap(docRef.id).then((snapRes) => {
        const helpObject = { workoutID: docRef.id };
        navigation.navigate("WorkoutScreen", {
          workout: Object.assign(snapRes.data(), helpObject),
          workoutID: docRef.id,
          editable: true,
        });
      });
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <ScrollView>
          <HeaderNewWorkout helperText="Neues Workout einrichten" />
          <View
            style={{
              marginTop: 50,
              marginBottom: 20,
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MyText text={"Welche Kategorie?"} fontSize={18} />
              </View>
              <FlatList
                data={Kategorien}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
              />
            </View>
            <View style={{ marginTop: 50 }}>
              <MyText
                text="Wie soll dein neues Workout heißen?"
                fontSize={18}
              />
              <TextInput
                theme={myTheme}
                label="Name"
                mode="outlined"
                value={selectionID}
                style={{ marginTop: 10, marginBottom: 30 }}
                onChangeText={(selectionID) => setselectionID(selectionID)}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{ marginBottom: 20 }}>
          <WeiterButton
            disabled={selectionID === null}
            onPress={erstelleTraining}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const WorkoutSelection = ({
  img,
  text,
  selectionID,
  setselectionID,
  kategorie,
  setKategorie,
}) => {
  const backgroundColor =
    kategorie === text ? Colors.selectionColor : "transparent";

  const handlePress = () => {
    if (kategorie === text) {
      setKategorie(null);
      setselectionID(null);
    } else {
      setKategorie(text);
      setselectionID(text);
    }
  };
  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: 80,
        margin: 10,
        backgroundColor: backgroundColor,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handlePress}
    >
      <Image source={img} style={{ height: 50, width: 50 }} />
      <MyText text={text} />
    </TouchableOpacity>
  );
};
