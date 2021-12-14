import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, FlatList } from "react-native";
import {
  Divider,
  Portal,
  Modal,
  Provider,
  Text,
  TextInput,
  IconButton,
} from "react-native-paper";
import { Colors } from "../../colors";
import MyText from "../../components/MyText";
import myTheme from "../../myTheme";
import SingleUbung from "./SingleUbung";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import MyDropDownPicker from "../../components/MyDropDownPicker";
import { muskelgruppen } from "../../Muskelgruppen";
import { Uebungen } from "../../Uebungen";
import { DBM } from "../../DatabaseManager";

export default function TrainingHome({ route }) {
  const navigation = useNavigation();
  const title = route.params.titel;
  const trainingsId = route.params.id;

  const [visible, setVisible] = useState(false);
  const [art, setArt] = useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: Colors.offColor, padding: 20 };

  async function handleModalPress() {
    docRef = addUebungToDatabase();
    if (uebungPick !== "") {
      navigation.navigate("UebungScreen", {
        name: uebungPick,
        art: art,
        trainingsId: trainingsId,
        uebungsId: (await docRef).id,
      });
    }
  }
  let workoutData = DBM.getWorkouts(trainingsId).then((querySnapshot) => {
    workoutData = querySnapshot.docs.map((doc) => doc.data());
  });

  async function addUebungToDatabase() {
    return db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Trainingseinheiten")
      .doc(trainingsId)
      .collection("Uebungen")
      .add({
        name: uebungPick,
        muskelgruppe: muskelgruppePick,
        art: art,
        trainingsId: trainingsId,
        id: uebungPick + art,
      });
  }

  const [muskelgruppePick, setMuskelgruppePick] = useState(null);
  const [uebungPick, setUebungPick] = useState(null);
  const [uebungenData, setUebungenData] = useState(["..."]);
  const getUebungenDropdown = () => {
    switch (muskelgruppePick) {
      case "brust":
        return Uebungen.Brust;
      case "rücken":
        return Uebungen.Rücken;
      case "bizeps":
        return Uebungen.Bizeps;
      case "trizeps":
        return Uebungen.Trizeps;
      case "bauch":
        return Uebungen.Bauch;
      case "beine":
        return Uebungen.Beine;
      case "schultern":
        return Uebungen.Schulter;
      case "nacken":
        return Uebungen.Nacken;
      default:
        return ["Leer"];
    }
  };

  const handleFertigPress = () => {};

  const renderItem = ({ item }) => (
    <SingleUbung name={item.name} sets={item.sets} />
  );
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const subscriber = db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Trainingseinheiten")
      .doc(trainingsId)
      .collection("Uebungen")
      .onSnapshot((querySnapshot) => {
        const workouts = [];

        querySnapshot.forEach((documentSnapshot) => {
          workouts.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setWorkouts(workouts);
        setLoading(false);
      });

    return () => subscriber();
  }, []);
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <MyText text={"Neue Übung"} bold fontSize={23} />
            <MyDropDownPicker
              items={muskelgruppen}
              value={muskelgruppePick}
              setValue={setMuskelgruppePick}
            />
            <MyDropDownPicker
              items={getUebungenDropdown()}
              value={uebungPick}
              setValue={setUebungPick}
            />
            <TextInput
              theme={myTheme}
              label="Art"
              mode="outlined"
              value={art}
              style={styles.textInput}
              onChangeText={(art) => setArt(art)}
            />
            <TouchableOpacity
              style={{
                height: 50,
                marginTop: 30,
                backgroundColor: "lightgreen",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleModalPress}
            >
              <MyText text="Los" color="black" bold fontSize={23} />
            </TouchableOpacity>
          </Modal>
        </Portal>
        <View style={styles.mainContent}>
          <View style={styles.header}>
            <View style={{ flex: 2 }}>
              <MyText bold text={title} fontSize={35} />
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
              onPress={handleFertigPress}
            >
              <MyText text="Fertig" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.newItem} onPress={showModal}>
            <MyText text="Neue Übung" />
          </TouchableOpacity>
          <View style={{ marginTop: 50 }}>
            <MyText text="Übungen" />
            <Divider theme={myTheme} />
            <FlatList
              style={styles.itemswrapper}
              data={workouts}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
          </View>
        </View>
      </View>
    </Provider>
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
  textInput: {
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemswrapper: {
    marginTop: 30,
  },

  newItem: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 80,
    color: "white",
    height: 100,
    width: "100%",
    borderColor: "white",
    backgroundColor: "transparent",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    fontFamily: "Poppins_400Regular",
  },
});
