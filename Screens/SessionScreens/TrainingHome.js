import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
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

export default function TrainingHome({ route }) {
  const navigation = useNavigation();
  const title = route.params.titel;
  const trainingsId = route.params.id;

  const [visible, setVisible] = useState(false);
  const [muskelgruppe, setMuskelgruppe] = useState("");
  const [name, setName] = useState("");
  const [art, setArt] = useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: Colors.offColor, padding: 20 };

  const uebungenRef = collection(
    db,
    `Benutzer/${auth.currentUser.uid}/Trainingseinheiten/${trainingsId}/Uebungen`
  );
  async function getSnap() {
    const docSnap = await getDoc(uebungenRef);
    return docSnap;
  }

  const handleModalPress = () => {
    addUebungToDatabase();
    if (name !== "") {
      navigation.navigate("UebungScreen", {
        name: name,
        art: art,
        trainingsId: trainingsId,
      });
    }
  };

  async function addUebungToDatabase() {
    // Aufteilung in Muskelgruppen
    db.collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Trainingseinheiten")
      .doc(trainingsId)
      .collection("Uebungen")
      .doc(muskelgruppe)
      .collection(name)
      .add({
        name: name,
        muskelgruppe: muskelgruppe,
        art: art,
        trainingsId: trainingsId,
      });
  }

  const docRef = db.collection(
    `Benutzer/${auth.currentUser.uid}/Trainingseinheiten/${trainingsId}/Uebungen/Bizeps/Curls`
  );
  const handleFertigPress = () => {
    console.log(getMarker());
  };
  async function getWorkouts() {
    return await db
      .collection(
        `Benutzer/${auth.currentUser.uid}/Trainingseinheiten/${trainingsId}/Uebungen`
      )
      .get();
  }
  async function getMarker() {
    console.log("id: " + trainingsId);
    const snapshot = await db
      .collection(
        `Benutzer/${auth.currentUser.uid}/Trainingseinheiten/${trainingsId}/Uebungen`
      )
      .get();
    return snapshot.docs;
  }

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
            <MyDropDownPicker data={muskelgruppen} />
            <MyDropDownPicker data={Uebungen.Brust} />
            <TextInput
              theme={myTheme}
              label="Name"
              mode="outlined"
              value={name}
              style={styles.textInput}
              onChangeText={(name) => setName(name)}
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
            <View style={styles.itemswrapper}>
              <SingleUbung />
              <SingleUbung />
              <SingleUbung />
            </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
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
