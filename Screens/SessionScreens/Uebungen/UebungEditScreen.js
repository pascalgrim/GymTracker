import React, { useState, useEffect } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import FavIcon from "../../../components/FavIcon";
import {
  Modal,
  Portal,
  Button,
  Provider,
  IconButton,
} from "react-native-paper";
import MyText from "../../../components/MyText";
import SaetzeList from "../../../components/SaetzeList";
import { Colors } from "../../../colors";
import NumericInput from "react-native-numeric-input";
import MyNumericInput from "../../../components/MyNumericInput";
import { db } from "../../../firebase";
import { auth } from "../../../firebase";
import { DBM } from "../../../DatabaseManager";

export default function UebungEditScreen({ workout, uebung, id }) {
  const navigation = useNavigation();
  const [aufgeklappt, setAufgeklappt] = useState(false);
  const [setsCounter, setSetsCounter] = useState(1);
  const [wdh, setWdh] = useState(0);
  const [gewicht, setGewicht] = useState(0);
  const [prevWdh, setPrevWdh] = useState(0);
  const [prevGewicht, setprevGewicht] = useState(0);
  const idConverted = id === undefined ? uebung.key : id;

  // ADD SET FUNCTION
  const handleAddSetPress = () => {
    if (wdh > 0 && gewicht > 0) {
      DBM.addSet(
        workout.workoutID,
        idConverted,
        setsCounter,
        wdh,
        gewicht
      ).then(() =>
        DBM.incrementWorkoutStats(workout.workoutID, wdh, 1, gewicht, uebung)
      );
      setPrevWdh(wdh);
      setprevGewicht(gewicht);
      setWdh(0);
      setGewicht(0);
      setSetsCounter((prev) => prev + 1);
    } else {
      Alert.alert("Du musst Wiederholungen und Gewicht eintragen");
    }
  };

  // MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    backgroundColor: Colors.offColor,
    padding: 20,
    position: "absolute",
    bottom: 100,
    width: "100%",
    alignItems: "center",
  };

  const [loading, setLoading] = useState(true);
  const [sets, setSets] = useState([]);
  useEffect(() => {
    const subscriber = db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Workouts")
      .doc(workout.workoutID)
      .collection("Uebungen")
      .doc(idConverted)
      .collection("Sätze")
      .onSnapshot((querySnapshot) => {
        const sets = [];

        querySnapshot.forEach((documentSnapshot) => {
          sets.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setSets(sets);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  const handleRepeatButtonPress = () => {
    setWdh(prevWdh);
    setGewicht(prevGewicht);
  };

  const [showLastWorkout, setShowLastWorkout] = useState(false);
  async function handleEyePress() {
    setShowLastWorkout(!showLastWorkout);
    DBM.getLatesWorkoutIdFromUebungName(uebung.name)
      .then((res) => {if (res !== workout.workoutID){
        DBM.getUebungInfos(res, uebung.name).then((data) => console.log("Data:" + JSON.stringify(data)))}else{
          console.log("Es existiert keine altes Workout mit " + uebung.name)
        }})
      
    // DBM.getLatesWorkoutIdFromUebungName(uebung.name)
    //   .then((res) => console.log(res))
  }

  return (
    <Provider>
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            height: 100,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="chevron-left"
            color="white"
            size={30}
            // NEUES WORKOUT ITEM ERZEUGEN MIT GEÄNDERTEN STATS
            onPress={() =>
              DBM.getWorkoutSnap(workout.workoutID).then((snap) => {
                const helpObject = { workoutID: workout.workoutID };
                navigation.replace("WorkoutScreen", {
                  workout: Object.assign(snap.data(), helpObject),
                  editable: true,
                });
              })
            }
          />
          <MyText text="24:13 min" />
          <IconButton
            icon={showLastWorkout ? "eye-off" : "eye"}
            color="white"
            onPress={handleEyePress}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginBottom: 30 }}>
            <MyText
              text={workout.erstelltAm.toDate().toDateString()}
              color="grey"
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <MyText text={uebung.name} fontSize={30} centered />
          </View>
        </View>
        {/* SÄTZE */}
        <SaetzeList workoutID={workout.workoutID} uebungsId={idConverted} />
        <View style={{ height: 100 }}></View>

        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <IconButton
              icon="refresh"
              color={Colors.blue}
              style={{ marginBottom: 20 }}
              size={30}
              onPress={handleRepeatButtonPress}
            />

            <View style={{ flexDirection: "row" }}>
              <MyNumericInput
                title="Wiederholungen"
                value={wdh}
                setValue={setWdh}
              />
              <MyNumericInput
                title="Gewicht"
                value={gewicht}
                setValue={setGewicht}
                gewichtSteps
              />
            </View>
            <TouchableOpacity
              style={{
                height: 70,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
              onPress={handleAddSetPress}
            >
              <MyText text="Hinzufügen" />
            </TouchableOpacity>
          </Modal>
        </Portal>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            paddingVertical: 20,
            alignSelf: "center",
            backgroundColor: Colors.bg,
            width: "100%",
          }}
        >
          <IconButton
            icon="plus"
            color="black"
            size={40}
            style={{ backgroundColor: Colors.blue, alignSelf: "center" }}
            onPress={showModal}
          />
        </View>
      </View>
    </Provider>
  );
}

const LastWorkout = () => {
  return <View></View>;
};
