import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../colors";
import { TextInput, Chip, Button } from "react-native-paper";
import myTheme from "../../myTheme";
import { useNavigation } from "@react-navigation/native";
import Header from "../SettingsScreens/Header";
import MyText from "../../components/MyText";
import MySnackbar from "../../components/MySnackBar";
import { DBM } from "../../DatabaseManager";

export default function NewSessionFirstInfo() {
  const navigation = useNavigation();
  const [titel, setTitel] = useState("");
  const [anmerkung, setAnmerkung] = useState("");
  const [visible, setVisible] = useState(false);

  async function erstelleTraining() {
    const docRef = DBM.createTraining(titel, anmerkung);
    navigation.navigate("TrainingHome", {
      titel: titel,
      id: (await docRef).id,
    });
  }
  const handlePress = () => {
    if (titel !== "") {
      erstelleTraining();
    } else {
      setVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Neues Training" dashboard />
      <View style={styles.mainContent} behavior="height">
        <View>
          <MyText text="1. Was steht heute an?" />
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
      <MySnackbar
        text="Bitte gebe einen Namen für dein Training ein."
        isVisible={visible}
        setIsVisible={setVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  mainContent: {
    flex: 1,
    padding: 20,
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
