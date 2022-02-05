import React, { useEffect, useState } from "react";
import { View,  Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../styles";
import DropDown from "react-native-paper-dropdown";
import { Provider } from "react-native-paper";
import { muskelgruppen } from "../../../Muskelgruppen";
import { Uebungen } from "../../../Uebungen";
import MyText from "../../../components/MyText";
import { IconButton } from "react-native-paper";
import WeiterButton from "../../../components/WeiterButton";
import { useNavigation } from "@react-navigation/native";
import { DBM } from "../../../DatabaseManager";
import { getDoc } from "firebase/firestore";
import { query, collection, getDocs } from "firebase/firestore";
import { auth } from "../../../firebase";
import { db } from "../../../firebase";

export default function UebungInfoScreen({ route }) {
  const navigation = useNavigation();
  const workout = route.params.workout;
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [muskelGruppe, setMuskelGruppe] = useState("");
  const [uebung, setUebung] = useState("");

  const getUebungen = () => {
    switch (muskelGruppe) {
      case "Rücken":
        return Uebungen.Rücken;
      case "Beine":
        return Uebungen.Beine;
      case "Brust":
        return Uebungen.Brust;
      case "Schultern":
        return Uebungen.Schultern;
      case "Bizeps":
        return Uebungen.Bizeps;
      case "Trizeps":
        return Uebungen.Trizeps;
      case "Bauch":
        return Uebungen.Bauch;
      case "Nacken":
        return Uebungen.Nacken;
      default:
        return [];
    }
  };

  const [num, setNum] = useState(1);
  async function readLastUebungNumber() {
    const q = query(
      collection(
        db,
        `Benutzer/${auth.currentUser.uid}/Workouts/${workout.workoutID}/Uebungen`
      )
    );
    const querySnapshot = await getDocs(q);
    setNum(querySnapshot.size + 1);
  }

  const handlePress = () => {
    if (muskelGruppe !== "" && uebung !== "") {
      readLastUebungNumber().then(() =>
        DBM.createUebung(workout.workoutID, muskelGruppe, uebung, num).then(
          function (docRef) {
            DBM.getUebungSnap(workout.workoutID, docRef.id)
              .then(getDoc(docRef))
              .then(function (res) {
                navigation.navigate("UebungHelperScreen", {
                  uebung: res.data(),
                  workout: workout,
                  editable: true,
                  uebungId: docRef.id,
                });
              });
          }
        )
      );
    } else {
      Alert.alert("Muskelgruppe oder Übung nicht angegeben");
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setUebung("");
    return () => {
      isMounted = false;
    };
  }, [muskelGruppe]);
  return (
    <Provider>
      <SafeAreaView style={styles.container}>
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
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <MyText text="Muskelgruppe" fontSize={23} />
          <DropDown
            // label={"Muskelgruppe"}
            mode={"outlined"}
            visible={showDropDown1}
            showDropDown={() => {
              if (!showDropDown1) {
                setShowDropDown2(false);
              }
              setShowDropDown1(true);
            }}
            onDismiss={() => setShowDropDown1(false)}
            value={muskelGruppe}
            setValue={setMuskelGruppe}
            list={muskelgruppen}
          />
        </View>
        <View>
          {muskelGruppe !== "" ? (
            <View style={{ marginVertical: 10 }}>
              <MyText text="Übung" fontSize={23} />
              <DropDown
                // label={"Uebung"}
                mode={"outlined"}
                visible={showDropDown2}
                showDropDown={() => {
                  if (!showDropDown1) {
                    setShowDropDown1(false);
                  }
                  setShowDropDown2(true);
                }}
                onDismiss={() => setShowDropDown2(false)}
                value={uebung}
                setValue={setUebung}
                list={getUebungen()}
              />
            </View>
          ) : null}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
            width: "100%",
          }}
        >
          <WeiterButton onPress={handlePress} />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
