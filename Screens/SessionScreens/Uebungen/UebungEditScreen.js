import React, { useState, useEffect } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
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
  const idConverted = id === undefined ? uebung.key : id;
  const handleAddSetPress = () => {
    DBM.addSet(workout.workoutID, idConverted, setsCounter, wdh, gewicht);
    setWdh(0);
    setGewicht(0);
    setSetsCounter((prev) => prev + 1);
  };
  // MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    backgroundColor: Colors.blue,
    padding: 20,
    position: "absolute",
    bottom: 100,
    width: "100%",
    alignItems: "center",
  };
  const renderItem = ({ item }) => (
    <SatzDataComponent
      Satz={item.Nummer}
      Wdh={item.Wiederholungen}
      Gewicht={item.Gewicht}
    />
  );
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
            onPress={() =>
              navigation.replace("WorkoutScreen", {
                workout: workout,
                editable: true,
              })
            }
          />
          <MyText text="24:13 min" />
          <FavIcon />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginBottom: 30 }}>
            <MyText
              text={workout.erstelltAm.toDate().toDateString()}
              color="grey"
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <MyText text={uebung.name} fontSize={30} />
          </View>
        </View>
        {/* SÄTZE */}
        <View style={{}}>
          <SaetzeList workoutID={workout.workoutID} uebungsId={idConverted} />
        </View>
        {/* LETZES WORKOUT SÄTZE */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <MyText text="Gewichte vom letzten Mal" />
            <IconButton
              icon={aufgeklappt ? "chevron-down" : "chevron-up"}
              color="white"
              onPress={() => setAufgeklappt(!aufgeklappt)}
            />
          </View>
          <View>
            {aufgeklappt ? (
              <SaetzeList
                workoutID={workout.workoutID}
                uebungsId={idConverted}
                old
              />
            ) : null}
          </View>
        </View>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
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
            bottom: 20,
            alignSelf: "center",
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
