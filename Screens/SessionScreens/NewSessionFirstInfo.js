import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../colors";
import { TextInput, Chip, Button } from "react-native-paper";
import myTheme from "../../myTheme";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Header from "../SettingsScreens/Header";
import MyText from "../../components/MyText";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function NewSessionFirstInfo() {
  const navigation = useNavigation();
  const [titel, setTitel] = useState("");
  const [anmerkung, setAnmerkung] = useState("");
  const [id, setId] = useState("");

  async function erstelleTraining() {
    const datum = Timestamp.now();
    const docRef = await addDoc(collection(db, "Trainingseinheiten"), {
      titel: titel,
      anmerkung: anmerkung,
      datum: datum,
    });
    setId(docRef.id);
    navigation.navigate("TrainingHome", { titel: titel, id: id });
  }
  const handlePress = () => {
    if (titel !== "") {
      erstelleTraining();
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Neues Training" dashboard />
      <View style={styles.mainContent}>
        <View>
          <MyText text="1. Was steht heute an?" style={styles.titleText} />
          <TextInput
            theme={myTheme}
            mode="outlined"
            value={titel}
            style={styles.textInput}
            placeholder="Arme"
            onChangeText={(titel) => setTitel(titel)}
          />
        </View>

        <View>
          <MyText text="2. Anmerkungen(optional)" />
          <TextInput
            theme={myTheme}
            mode="outlined"
            style={styles.textInputBig}
            placeholder="Heute lege ich Fokus auf ..."
            value={anmerkung}
            multiline
            onChangeText={(anmerkung) => setAnmerkung(anmerkung)}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <MyText text="Jetzt Loslegen" color={Colors.green} fontSize={18} />
        </TouchableOpacity>
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
    justifyContent: "space-evenly",
  },
  textInput: { fontFamily: "Poppins_400Regular" },
  textInputBig: { height: 150, fontFamily: "Poppins_400Regular" },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.green,
    borderRadius: 5,
    height: 50,
  },
});
